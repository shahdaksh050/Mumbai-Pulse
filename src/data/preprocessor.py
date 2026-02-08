"""
Data preprocessing and sliding-window generation for the TCN pipeline.

Responsibilities
────────────────
1. **Feature engineering** — cyclic time encodings (hour, day-of-week).
2. **Scaling** — per-feature Min-Max normalisation with joblib persistence.
3. **Sliding windows** — convert a flat time-series into (X, Y) supervised
   learning pairs:  X = [t₀ … t₂₃],  Y = [t₂₄ … t₂₉].
4. **Inverse transform** — convert normalised predictions back to real
   congestion percentages (0–100 %).

All functions are deterministic and stateless (scaler state is persisted
to disk via joblib).
"""

from __future__ import annotations

import numpy as np
import pandas as pd
import joblib
from pathlib import Path
from typing import Tuple, List, Dict, Any
from datetime import datetime, timedelta

from src.config import (
    FEATURE_COLS,
    TARGET_COL,
    TARGET_IDX,
    INPUT_WINDOW,
    FORECAST_HORIZON,
    SCALER_PATH,
)
from src.api.events import TrafficEvent, event_manager


# ─────────────────────── Feature Engineering ───────────────────────────────

def add_cyclic_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create sine / cosine cyclic encodings for ``hour`` and ``day_of_week``
    so the model understands that hour 23 is close to hour 0.

    Expects columns ``hour`` (0-23) and ``day_of_week`` (0-6) in *df*.
    Adds: hour_sin, hour_cos, dow_sin, dow_cos.
    """
    df = df.copy()
    df["hour_sin"] = np.sin(2 * np.pi * df["hour"] / 24)
    df["hour_cos"] = np.cos(2 * np.pi * df["hour"] / 24)
    df["dow_sin"] = np.sin(2 * np.pi * df["day_of_week"] / 7)
    df["dow_cos"] = np.cos(2 * np.pi * df["day_of_week"] / 7)
    return df


def add_event_features(df: pd.DataFrame, events: List[TrafficEvent] = None) -> pd.DataFrame:
    """
    Add event-based features that could impact traffic congestion.

    Features added:
    - event_impact_score: Overall impact score (0-10) based on nearby events
    - concert_nearby: Binary flag for concerts within 5km
    - sports_nearby: Binary flag for sports events within 5km
    - event_density: Number of events within 10km
    - high_impact_event: Binary flag for high-impact events (concerts, sports, festivals)

    Parameters
    ----------
    df : pd.DataFrame
        Traffic data with latitude, longitude, timestamp columns
    events : List[TrafficEvent], optional
        Pre-fetched events. If None, will fetch events for each location.

    Returns
    -------
    pd.DataFrame
        DataFrame with additional event features
    """
    df = df.copy()

    # Initialize event features
    df["event_impact_score"] = 0.0
    df["concert_nearby"] = 0
    df["sports_nearby"] = 0
    df["event_density"] = 0
    df["high_impact_event"] = 0

    if events is None:
        # If no events provided, we'll add placeholder features
        # In production, events should be pre-fetched and passed in
        logger.warning("No events provided - using placeholder event features")
        return df

    # Process each row to calculate event impacts
    for idx, row in df.iterrows():
        lat, lon = row["latitude"], row["longitude"]
        timestamp = row["timestamp"]

        # Find events near this location and time
        nearby_events = []
        for event in events:
            # Calculate distance
            distance = _calculate_distance(lat, lon, event.latitude, event.longitude)

            # Check if event is active at this time
            if event.start_time <= timestamp:
                if event.end_time is None or event.end_time >= timestamp:
                    time_active = True
                else:
                    time_active = False
            else:
                time_active = False

            if distance <= 10.0 and time_active:  # Within 10km and currently active
                nearby_events.append((event, distance))

        # Calculate features
        impact_score = 0.0
        concert_flag = 0
        sports_flag = 0
        density = len(nearby_events)
        high_impact = 0

        for event, distance in nearby_events:
            # Impact decreases with distance
            distance_factor = max(0, 1 - (distance / 10.0))  # 1 at 0km, 0 at 10km

            # Event type impact
            type_impact = _get_event_type_impact(event.event_type)

            # Size/capacity impact
            size_impact = 1.0
            if event.expected_attendance:
                size_impact = min(event.expected_attendance / 1000, 5.0)  # Cap at 5x for 5000+ attendees
            elif event.venue_capacity:
                size_impact = min(event.venue_capacity / 1000, 5.0)

            event_impact = type_impact * distance_factor * size_impact
            impact_score += event_impact

            # Set flags
            if event.event_type == "concert" and distance <= 5.0:
                concert_flag = 1
            if event.event_type == "sports" and distance <= 5.0:
                sports_flag = 1
            if event.event_type in ["concert", "sports", "festival"] and distance <= 5.0:
                high_impact = 1

        # Cap impact score
        impact_score = min(impact_score, 10.0)

        # Update dataframe
        df.at[idx, "event_impact_score"] = impact_score
        df.at[idx, "concert_nearby"] = concert_flag
        df.at[idx, "sports_nearby"] = sports_flag
        df.at[idx, "event_density"] = density
        df.at[idx, "high_impact_event"] = high_impact

    return df


def _calculate_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """Calculate distance between two points in km using Haversine formula."""
    from math import radians, sin, cos, sqrt, atan2

    R = 6371  # Earth's radius in km

    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)

    a = sin(dlat/2) * sin(dlat/2) + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon/2) * sin(dlon/2)
    c = 2 * atan2(sqrt(a), sqrt(1-a))

    return R * c


def _get_event_type_impact(event_type: str) -> float:
    """Get impact multiplier for different event types."""
    impact_map = {
        "concert": 3.0,
        "sports": 2.5,
        "festival": 2.0,
        "event": 1.5,
        "entertainment": 1.2,
        "shopping": 0.8,
        "business": 0.6,
        "tourism": 0.7,
        "transport": 1.0,
        "other": 0.5,
    }
    return impact_map.get(event_type, 0.5)


# ─────────────────────── Scaler (Min-Max) ─────────────────────────────────

class TrafficScaler:
    """
    Per-feature Min-Max scaler that maps each feature to [0, 1].

    Saves / loads its state (min, max arrays) with joblib so the same
    transform can be applied at inference time without re-fitting.
    """

    def __init__(self):
        self.min_vals: np.ndarray | None = None
        self.max_vals: np.ndarray | None = None
        self._fitted = False

    # ----- fit / transform / inverse_transform -----

    def fit(self, data: np.ndarray) -> "TrafficScaler":
        """
        Compute per-feature min/max from *data* (N, num_features).
        """
        self.min_vals = data.min(axis=0)
        self.max_vals = data.max(axis=0)
        # Avoid division by zero for constant features
        self.max_vals = np.where(
            self.max_vals == self.min_vals,
            self.min_vals + 1.0,
            self.max_vals,
        )
        self._fitted = True
        return self

    def transform(self, data: np.ndarray) -> np.ndarray:
        """Scale *data* (N, F) to [0, 1]."""
        assert self._fitted, "Call .fit() first"
        return (data - self.min_vals) / (self.max_vals - self.min_vals)

    def fit_transform(self, data: np.ndarray) -> np.ndarray:
        return self.fit(data).transform(data)

    def inverse_transform_target(self, scaled: np.ndarray) -> np.ndarray:
        """
        Inverse-scale the **target column only** (congestion_level)
        back to its original 0–100 % range.

        Parameters
        ----------
        scaled : ndarray  — normalised congestion values (any shape).

        Returns
        -------
        ndarray — real congestion values.
        """
        assert self._fitted, "Call .fit() first"
        t_min = self.min_vals[TARGET_IDX]
        t_max = self.max_vals[TARGET_IDX]
        return scaled * (t_max - t_min) + t_min

    # ----- persistence -----

    def save(self, path: Path | str = SCALER_PATH) -> None:
        path = Path(path)
        path.parent.mkdir(parents=True, exist_ok=True)
        joblib.dump({"min": self.min_vals, "max": self.max_vals}, path)

    @classmethod
    def load(cls, path: Path | str = SCALER_PATH) -> "TrafficScaler":
        raw = joblib.load(path)
        scaler = cls()
        scaler.min_vals = raw["min"]
        scaler.max_vals = raw["max"]
        scaler._fitted = True
        return scaler


# ─────────────────── Sliding Window Generator ──────────────────────────────

def create_sequences(
    data: np.ndarray,
    input_window: int = INPUT_WINDOW,
    forecast_horizon: int = FORECAST_HORIZON,
    target_idx: int = TARGET_IDX,
) -> Tuple[np.ndarray, np.ndarray]:
    """
    Convert a (N, F) scaled feature matrix into supervised-learning pairs
    using a sliding window.

    Logic
    ─────
    For each valid starting index *i*:
        X[i] = data[i : i + input_window]            → shape (24, F)
        Y[i] = data[i + input_window :
                     i + input_window + forecast_horizon, target_idx]
                                                       → shape (6,)

    The returned X is transposed to **(samples, F, 24)** — the channel-first
    format expected by Conv1d / TCN.

    Parameters
    ----------
    data : ndarray (N, F)
        Scaled feature matrix for a *single road segment*, sorted by time.
    input_window : int
        Number of past time-steps.  Default 24.
    forecast_horizon : int
        Number of future time-steps to predict.  Default 6.
    target_idx : int
        Column index of the target feature in *data*.

    Returns
    -------
    X : ndarray (samples, F, input_window)
    Y : ndarray (samples, forecast_horizon)
    """
    total_window = input_window + forecast_horizon
    if len(data) < total_window:
        raise ValueError(
            f"Need at least {total_window} rows, got {len(data)}"
        )

    num_samples = len(data) - total_window + 1
    F = data.shape[1]

    X = np.empty((num_samples, F, input_window), dtype=np.float32)
    Y = np.empty((num_samples, forecast_horizon), dtype=np.float32)

    for i in range(num_samples):
        # (input_window, F) → transpose to (F, input_window)
        X[i] = data[i : i + input_window].T
        Y[i] = data[
            i + input_window : i + input_window + forecast_horizon,
            target_idx,
        ]

    return X, Y


# ────────────────── Full DataFrame → Training Arrays ──────────────────────

def prepare_training_data(
    df: pd.DataFrame,
    segment_col: str = "road_id",
) -> Tuple[np.ndarray, np.ndarray, TrafficScaler]:
    """
    End-to-end pipeline:
    1. Add cyclic features.
    2. **NEW**: Fetch and add event-based features.
    3. Sort by segment + timestamp.
    4. Fit scaler on ALL data.
    5. Build sliding-window pairs **per segment** (avoids cross-segment leakage).

    Returns (X, Y, scaler).
    """
    df = add_cyclic_features(df)

    # Fetch events for all locations in the dataset
    if "event_impact_score" in FEATURE_COLS:
        print("🔍 Fetching event data for traffic impact analysis...")
        import asyncio
        try:
            events = asyncio.run(_fetch_events_for_dataset(df))
            df = add_event_features(df, events)
            print(f"📊 Added event features for {len(events)} events")
        except Exception as e:
            print(f"⚠️ Failed to fetch events: {e}. Using placeholder features.")
            df = add_event_features(df, [])
    else:
        print("ℹ️ Event features disabled (not in FEATURE_COLS)")

    # Ensure chronological order within each segment
    df = df.sort_values([segment_col, "timestamp"]).reset_index(drop=True)

    # Extract feature matrix and fit scaler globally
    feature_matrix = df[FEATURE_COLS].values.astype(np.float32)
    scaler = TrafficScaler()
    scaled = scaler.fit_transform(feature_matrix)

    # Build windows per segment to prevent cross-segment data leakage
    all_X, all_Y = [], []
    for _, grp in df.groupby(segment_col):
        idx = grp.index.values
        seg_data = scaled[idx]
        if len(seg_data) < INPUT_WINDOW + FORECAST_HORIZON:
            continue
        x, y = create_sequences(seg_data)
        all_X.append(x)
        all_Y.append(y)

    X = np.concatenate(all_X, axis=0)
    Y = np.concatenate(all_Y, axis=0)

    scaler.save()
    return X, Y, scaler


async def _fetch_events_for_dataset(df: pd.DataFrame) -> List[TrafficEvent]:
    """
    Fetch events for all unique locations in the dataset.
    Uses caching to avoid duplicate API calls for similar locations.
    """
    # Get unique locations (rounded to ~1km precision to group nearby points)
    unique_locations = df.drop_duplicates(subset=["latitude", "longitude"])
    unique_locations = unique_locations.assign(
        lat_rounded=unique_locations["latitude"].round(2),
        lon_rounded=unique_locations["longitude"].round(2)
    ).drop_duplicates(subset=["lat_rounded", "lon_rounded"])

    all_events = []
    location_cache = {}

    for _, row in unique_locations.iterrows():
        lat, lon = row["latitude"], row["longitude"]
        cache_key = f"{lat:.2f}_{lon:.2f}"

        if cache_key in location_cache:
            events = location_cache[cache_key]
        else:
            try:
                # Fetch events for this location
                events = await event_manager.get_events_near_location(lat, lon, radius_km=15)
                location_cache[cache_key] = events
                print(f"📍 Found {len(events)} events near ({lat:.4f}, {lon:.4f})")
            except Exception as e:
                print(f"⚠️ Failed to fetch events for location ({lat:.4f}, {lon:.4f}): {e}")
                events = []

        all_events.extend(events)

    # Remove duplicates
    unique_events = {event.event_id: event for event in all_events}
    return list(unique_events.values())


# ─────────── Prepare a single 24-row segment for inference ────────────────

def prepare_inference_segment(
    rows: pd.DataFrame,
    scaler: TrafficScaler,
    events: List[TrafficEvent] = None,
) -> np.ndarray:
    """
    Given exactly 24 rows of raw (un-scaled) data for one segment,
    return a model-ready tensor of shape (1, 24, F).

    Parameters
    ----------
    rows : pd.DataFrame
        24 rows of traffic data
    scaler : TrafficScaler
        Fitted scaler
    events : List[TrafficEvent], optional
        Events to consider for impact calculation
    """
    rows = add_cyclic_features(rows)
    if "event_impact_score" in FEATURE_COLS:
        rows = add_event_features(rows, events)
    feature_matrix = rows[FEATURE_COLS].values.astype(np.float32)
    scaled = scaler.transform(feature_matrix)     # (24, F)
    return scaled.T[np.newaxis, ...]              # (1, F, 24)
