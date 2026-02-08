"""
Event and Location API Integration for Traffic Prediction

This module integrates external APIs to fetch real-time events and location data
that can impact traffic patterns. Examples include:
- Concerts, sports events, festivals
- Road construction, accidents
- Weather events
- Public gatherings, protests
- Business districts activity

The data is processed and incorporated into the traffic forecasting model.
"""

from __future__ import annotations

import asyncio
import aiohttp
import json
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Any
from dataclasses import dataclass
import logging

from src.config import API_KEYS

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@dataclass
class TrafficEvent:
    """Represents an event that could impact traffic."""
    event_id: str
    name: str
    event_type: str  # concert, sports, construction, weather, etc.
    latitude: float
    longitude: float
    start_time: datetime
    end_time: Optional[datetime]
    expected_attendance: Optional[int]
    venue_capacity: Optional[int]
    description: str
    source: str  # API source (eventbrite, google, etc.)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "event_id": self.event_id,
            "name": self.name,
            "event_type": self.event_type,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "start_time": self.start_time.isoformat(),
            "end_time": self.end_time.isoformat() if self.end_time else None,
            "expected_attendance": self.expected_attendance,
            "venue_capacity": self.venue_capacity,
            "description": self.description,
            "source": self.source,
        }


class EventAPIClient:
    """Base class for event API clients."""

    def __init__(self, api_key: str, base_url: str):
        self.api_key = api_key
        self.base_url = base_url
        self.session: Optional[aiohttp.ClientSession] = None

    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    async def _make_request(self, endpoint: str, params: Dict[str, Any]) -> Dict[str, Any]:
        """Make HTTP request to API."""
        if not self.session:
            raise RuntimeError("Client not initialized. Use 'async with' context manager.")

        url = f"{self.base_url}/{endpoint}"
        params = {k: v for k, v in params.items() if v is not None}

        try:
            async with self.session.get(url, params=params) as response:
                response.raise_for_status()
                return await response.json()
        except aiohttp.ClientError as e:
            logger.error(f"API request failed: {e}")
            return {}


class EventbriteClient(EventAPIClient):
    """Client for Eventbrite API."""

    def __init__(self, api_key: str):
        super().__init__(api_key, "https://www.eventbriteapi.com/v3")

    async def get_events(self, latitude: float, longitude: float, radius: int = 10,
                        start_date: datetime = None, end_date: datetime = None) -> List[TrafficEvent]:
        """Fetch events from Eventbrite within specified area and time range."""
        if start_date is None:
            start_date = datetime.now()
        if end_date is None:
            end_date = start_date + timedelta(days=7)

        params = {
            "token": self.api_key,
            "location.latitude": latitude,
            "location.longitude": longitude,
            "location.within": f"{radius}km",
            "start_date.range_start": start_date.strftime("%Y-%m-%dT%H:%M:%S"),
            "start_date.range_end": end_date.strftime("%Y-%m-%dT%H:%M:%S"),
            "expand": "venue",
        }

        data = await self._make_request("events/search", params)
        events = []

        for event_data in data.get("events", []):
            try:
                venue = event_data.get("venue", {})
                event = TrafficEvent(
                    event_id=f"eventbrite_{event_data['id']}",
                    name=event_data.get("name", {}).get("text", "Unknown Event"),
                    event_type=self._classify_event(event_data),
                    latitude=float(venue.get("latitude", 0)),
                    longitude=float(venue.get("longitude", 0)),
                    start_time=datetime.fromisoformat(event_data["start"]["local"].replace('Z', '+00:00')),
                    end_time=datetime.fromisoformat(event_data["end"]["local"].replace('Z', '+00:00')) if event_data.get("end") else None,
                    expected_attendance=None,  # Eventbrite doesn't provide this
                    venue_capacity=int(venue.get("capacity", 0)) if venue.get("capacity") else None,
                    description=event_data.get("description", {}).get("text", ""),
                    source="eventbrite",
                )
                events.append(event)
            except (KeyError, ValueError) as e:
                logger.warning(f"Failed to parse Eventbrite event: {e}")
                continue

        return events

    def _classify_event(self, event_data: Dict[str, Any]) -> str:
        """Classify event type based on Eventbrite categories."""
        categories = event_data.get("category_id", "")
        if "103" in str(categories):  # Music
            return "concert"
        elif "105" in str(categories):  # Sports
            return "sports"
        elif "113" in str(categories):  # Community
            return "community"
        elif "101" in str(categories):  # Business
            return "business"
        else:
            return "other"


class GoogleMapsClient(EventAPIClient):
    """Client for Google Maps Places API (events and points of interest)."""

    def __init__(self, api_key: str):
        super().__init__(api_key, "https://maps.googleapis.com/maps/api")

    async def get_events_and_attractions(self, latitude: float, longitude: float,
                                       radius: int = 5000) -> List[TrafficEvent]:
        """Fetch events and attractions that could impact traffic."""
        # Search for event venues, stadiums, concert halls, etc.
        event_types = [
            "stadium", "concert_hall", "event_venue", "amusement_park",
            "tourist_attraction", "shopping_mall", "airport"
        ]

        all_events = []
        for place_type in event_types:
            events = await self._search_places(latitude, longitude, radius, place_type)
            all_events.extend(events)

        return all_events

    async def _search_places(self, latitude: float, longitude: float, radius: int,
                           place_type: str) -> List[TrafficEvent]:
        """Search for places of a specific type."""
        params = {
            "key": self.api_key,
            "location": f"{latitude},{longitude}",
            "radius": radius,
            "type": place_type,
        }

        data = await self._make_request("place/nearbysearch/json", params)
        events = []

        for place in data.get("results", []):
            try:
                event = TrafficEvent(
                    event_id=f"google_{place['place_id']}",
                    name=place.get("name", "Unknown Place"),
                    event_type=self._classify_place_type(place_type),
                    latitude=place["geometry"]["location"]["lat"],
                    longitude=place["geometry"]["location"]["lng"],
                    start_time=datetime.now(),  # Places API doesn't give event times
                    end_time=None,
                    expected_attendance=None,
                    venue_capacity=None,
                    description=place.get("vicinity", ""),
                    source="google_maps",
                )
                events.append(event)
            except (KeyError, ValueError) as e:
                logger.warning(f"Failed to parse Google Places result: {e}")
                continue

        return events

    def _classify_place_type(self, place_type: str) -> str:
        """Classify place type for traffic impact."""
        type_mapping = {
            "stadium": "sports",
            "concert_hall": "concert",
            "event_venue": "event",
            "amusement_park": "entertainment",
            "tourist_attraction": "tourism",
            "shopping_mall": "shopping",
            "airport": "transport",
        }
        return type_mapping.get(place_type, "other")


class TrafficEventManager:
    """Manages multiple event API clients and aggregates event data."""

    def __init__(self):
        self.clients = []
        self._setup_clients()

    def _setup_clients(self):
        """Initialize API clients with keys from config."""
        # Eventbrite
        eventbrite_key = API_KEYS.get("eventbrite")
        if eventbrite_key:
            self.clients.append(EventbriteClient(eventbrite_key))

        # Google Maps
        google_key = API_KEYS.get("google_maps")
        if google_key:
            self.clients.append(GoogleMapsClient(google_key))

    async def get_events_near_location(self, latitude: float, longitude: float,
                                     radius_km: int = 10,
                                     hours_ahead: int = 24) -> List[TrafficEvent]:
        """
        Get all events near a location that could impact traffic.

        Parameters
        ----------
        latitude, longitude : float
            Location coordinates
        radius_km : int
            Search radius in kilometers
        hours_ahead : int
            How many hours ahead to look for events

        Returns
        -------
        List[TrafficEvent]
            All relevant events found
        """
        start_time = datetime.now()
        end_time = start_time + timedelta(hours=hours_ahead)

        all_events = []

        async def fetch_from_client(client):
            try:
                if isinstance(client, EventbriteClient):
                    return await client.get_events(latitude, longitude, radius_km, start_time, end_time)
                elif isinstance(client, GoogleMapsClient):
                    return await client.get_events_and_attractions(latitude, longitude, radius_km * 1000)
                else:
                    return []
            except Exception as e:
                logger.error(f"Failed to fetch from {client.__class__.__name__}: {e}")
                return []

        # Fetch from all clients concurrently
        tasks = [fetch_from_client(client) for client in self.clients]
        results = await asyncio.gather(*tasks, return_exceptions=True)

        for result in results:
            if isinstance(result, list):
                all_events.extend(result)

        # Remove duplicates based on event_id
        unique_events = {event.event_id: event for event in all_events}
        return list(unique_events.values())

    async def get_events_impacting_road(self, road_latitude: float, road_longitude: float,
                                      road_name: str, radius_km: int = 5) -> List[TrafficEvent]:
        """
        Get events that could specifically impact a particular road segment.

        Parameters
        ----------
        road_latitude, road_longitude : float
            Road segment coordinates
        road_name : str
            Name of the road for context
        radius_km : int
            Search radius around the road

        Returns
        -------
        List[TrafficEvent]
            Events likely to impact this road
        """
        events = await self.get_events_near_location(road_latitude, road_longitude, radius_km)

        # Filter and prioritize events based on type and proximity
        high_impact_types = {"concert", "sports", "event", "festival"}
        high_impact_events = []

        for event in events:
            # Calculate distance (simple approximation)
            distance = self._calculate_distance(
                road_latitude, road_longitude,
                event.latitude, event.longitude
            )

            # Prioritize events within 2km and high-impact types
            if distance <= 2.0 or event.event_type in high_impact_types:
                high_impact_events.append((event, distance))

        # Sort by distance and impact
        high_impact_events.sort(key=lambda x: (x[1], -self._get_event_impact_score(x[0])))

        return [event for event, _ in high_impact_events[:10]]  # Top 10 most relevant

    def _calculate_distance(self, lat1: float, lon1: float, lat2: float, lon2: float) -> float:
        """Calculate approximate distance between two points in km."""
        from math import radians, sin, cos, sqrt, atan2

        R = 6371  # Earth's radius in km

        dlat = radians(lat2 - lat1)
        dlon = radians(lon2 - lon1)

        a = sin(dlat/2) * sin(dlat/2) + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon/2) * sin(dlon/2)
        c = 2 * atan2(sqrt(a), sqrt(1-a))

        return R * c

    def _get_event_impact_score(self, event: TrafficEvent) -> int:
        """Get impact score for event type (higher = more traffic impact)."""
        impact_scores = {
            "concert": 10,
            "sports": 9,
            "festival": 8,
            "event": 7,
            "entertainment": 6,
            "shopping": 4,
            "business": 3,
            "tourism": 5,
            "transport": 8,
            "other": 1,
        }
        return impact_scores.get(event.event_type, 1)


# Global event manager instance
event_manager = TrafficEventManager()


async def get_traffic_events(latitude: float, longitude: float, radius_km: int = 10) -> List[Dict[str, Any]]:
    """
    Main function to get traffic-impacting events for API endpoints.

    Returns events in JSON-serializable format.
    """
    events = await event_manager.get_events_near_location(latitude, longitude, radius_km)
    return [event.to_dict() for event in events]


# Example usage and testing
async def main():
    """Test the event API integration."""
    # Test coordinates (Mumbai area)
    latitude, longitude = 19.0760, 72.8777  # Mumbai coordinates

    print("🔍 Searching for traffic-impacting events in Mumbai...")

    events = await get_traffic_events(latitude, longitude, radius_km=20)

    print(f"📅 Found {len(events)} events:")

    for event in events[:5]:  # Show first 5
        print(f"  • {event['name']} ({event['event_type']})")
        print(f"    📍 {event['latitude']:.4f}, {event['longitude']:.4f}")
        print(f"    🕐 {event['start_time']}")
        print()


if __name__ == "__main__":
    asyncio.run(main())