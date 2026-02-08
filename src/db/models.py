"""
MongoDB (Atlas) models and database bootstrap.

Document Design for Fast Segmented Retrieval
────────────────────────────────────────────
The core collection ``traffic_readings`` has compound indexes on
(road_id, timestamp). This makes the query

    db.traffic_readings.find({
        "road_id": road_id,
        "timestamp": {"$gte": start, "$lt": end}
    }).sort("timestamp", 1)

an efficient index scan — exactly what the segmented search needs.

A separate collection ``road_segments`` caches the distinct segment metadata
(road_id, road_name, segment_name, lat, lon, road_class) so the MERN
frontend can populate a dropdown without scanning the entire readings collection.
"""

from __future__ import annotations

from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase, AsyncIOMotorCollection
from pymongo import IndexModel, ASCENDING, DESCENDING
from typing import Optional, List, Dict, Any

from src.config import MONGODB_URL, DATABASE_NAME


# ──────────────────────── MongoDB Connection ─────────────────────────────

client: AsyncIOMotorClient = AsyncIOMotorClient(MONGODB_URL)
db: AsyncIOMotorDatabase = client[DATABASE_NAME]


# ──────────────────────── Collections ─────────────────────────────────────

traffic_readings: AsyncIOMotorCollection = db.traffic_readings
road_segments: AsyncIOMotorCollection = db.road_segments


# ──────────────────────── Document Schemas ───────────────────────────────

class TrafficReading:
    """Document schema for traffic readings collection."""

    def __init__(
        self,
        road_id: str,
        road_name: str,
        segment_name: str,
        lat: float,
        lon: float,
        road_class: str,
        timestamp: datetime,
        hour: int,
        day_of_week: int,
        is_weekend: int,
        month: int,
        hourly_speed_kph: float,
        avg_speed_kph: float,
        travel_time_s: float,
        free_flow_speed_kph: float,
        free_flow_travel_time_s: float,
        delay_ratio: float,
        congestion_level: float,
        congestion_band: str,
        accident_hotspot_score: float,
        recent_incident_count: int,
        enforcement_violation_pattern: float,
        long_term_risk_prior: float,
    ):
        self.road_id = road_id
        self.road_name = road_name
        self.segment_name = segment_name
        self.lat = lat
        self.lon = lon
        self.road_class = road_class
        self.timestamp = timestamp
        self.hour = hour
        self.day_of_week = day_of_week
        self.is_weekend = is_weekend
        self.month = month
        self.hourly_speed_kph = hourly_speed_kph
        self.avg_speed_kph = avg_speed_kph
        self.travel_time_s = travel_time_s
        self.free_flow_speed_kph = free_flow_speed_kph
        self.free_flow_travel_time_s = free_flow_travel_time_s
        self.delay_ratio = delay_ratio
        self.congestion_level = congestion_level
        self.congestion_band = congestion_band
        self.accident_hotspot_score = accident_hotspot_score
        self.recent_incident_count = recent_incident_count
        self.enforcement_violation_pattern = enforcement_violation_pattern
        self.long_term_risk_prior = long_term_risk_prior

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "TrafficReading":
        return cls(**data)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "road_id": self.road_id,
            "road_name": self.road_name,
            "segment_name": self.segment_name,
            "lat": self.lat,
            "lon": self.lon,
            "road_class": self.road_class,
            "timestamp": self.timestamp,
            "hour": self.hour,
            "day_of_week": self.day_of_week,
            "is_weekend": self.is_weekend,
            "month": self.month,
            "hourly_speed_kph": self.hourly_speed_kph,
            "avg_speed_kph": self.avg_speed_kph,
            "travel_time_s": self.travel_time_s,
            "free_flow_speed_kph": self.free_flow_speed_kph,
            "free_flow_travel_time_s": self.free_flow_travel_time_s,
            "delay_ratio": self.delay_ratio,
            "congestion_level": self.congestion_level,
            "congestion_band": self.congestion_band,
            "accident_hotspot_score": self.accident_hotspot_score,
            "recent_incident_count": self.recent_incident_count,
            "enforcement_violation_pattern": self.enforcement_violation_pattern,
            "long_term_risk_prior": self.long_term_risk_prior,
        }


class RoadSegment:
    """Document schema for road segments collection."""

    def __init__(
        self,
        road_id: str,
        road_name: str,
        segment_name: str,
        lat: Optional[float] = None,
        lon: Optional[float] = None,
        road_class: Optional[str] = None,
    ):
        self.road_id = road_id
        self.road_name = road_name
        self.segment_name = segment_name
        self.lat = lat
        self.lon = lon
        self.road_class = road_class

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "RoadSegment":
        return cls(**data)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "road_id": self.road_id,
            "road_name": self.road_name,
            "segment_name": self.segment_name,
            "lat": self.lat,
            "lon": self.lon,
            "road_class": self.road_class,
        }


# ──────────────────────── Database Initialization ────────────────────────

async def init_db() -> None:
    """Create collections and indexes if they don't already exist."""

    # Create collections (MongoDB creates them automatically on first insert)
    # But we can ensure they exist
    collections = await db.list_collection_names()
    if "traffic_readings" not in collections:
        await db.create_collection("traffic_readings")
    if "road_segments" not in collections:
        await db.create_collection("road_segments")

    # Create indexes for traffic_readings
    traffic_indexes = [
        IndexModel([("road_id", ASCENDING), ("timestamp", ASCENDING)], name="road_time_idx"),
        IndexModel([("road_id", ASCENDING)], name="road_idx"),
        IndexModel([("timestamp", ASCENDING)], name="time_idx"),
    ]

    # Create indexes for road_segments
    segment_indexes = [
        IndexModel([("road_id", ASCENDING)], unique=True, name="road_id_unique_idx"),
        IndexModel([("road_name", ASCENDING)], name="road_name_idx"),
    ]

    # Apply indexes
    await traffic_readings.create_indexes(traffic_indexes)
    await road_segments.create_indexes(segment_indexes)

    print("✓ MongoDB collections and indexes initialized")


# ──────────────────────── Utility Functions ──────────────────────────────

async def get_db() -> AsyncIOMotorDatabase:
    """FastAPI dependency — returns the MongoDB database instance."""
    return db


async def close_db():
    """Close the MongoDB connection."""
    client.close()
