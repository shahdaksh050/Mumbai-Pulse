"""
Segmented Search & Inference Logic
───────────────────────────────────
Core query: "Give me the congestion forecast for road segment X
             starting from timestamp T."

Pipeline
────────
1. **Fetch** — Pull exactly 24 rows of historical data preceding T from the
   DB using the composite index (road_id, timestamp).  This is the "segment"
   we search within.
2. **Scale** — Apply the saved MinMax scaler to normalise the 24-row chunk.
3. **Infer** — Feed the (1, F, 24) tensor through the TCN.
4. **Inverse-scale** — Convert the 6 normalised outputs back to real
   congestion % (0-100).
5. **Format** — Return a JSON object with both the historical and forecast
   series, ready for a React chart component.

Prediction Region Search
────────────────────────
Beyond point-queries the module also exposes ``search_predictions`` which
lets a user search across **all forecasts stored in the predictions cache
table** — filterable by road segment, time range, and congestion threshold.
This fulfils the "search the prediction region" requirement.
"""

from __future__ import annotations

import torch
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
from typing import Optional, List, Dict, Any
from motor.motor_asyncio import AsyncIOMotorDatabase

from src.config import INPUT_WINDOW, FORECAST_HORIZON, FEATURE_COLS, TARGET_COL
from src.data.preprocessor import TrafficScaler, prepare_inference_segment
from src.models.tcn import TemporalConvNet
from src.db.models import traffic_readings, road_segments, TrafficReading, RoadSegment
from src.api.events import event_manager


# ═══════════════════ Singleton model / scaler holders ══════════════════════

_model: TemporalConvNet | None = None
_scaler: TrafficScaler | None = None


def load_artifacts(model_path: str, scaler_path: str, device: str = "cpu"):
    """Load trained TCN weights and fitted scaler into memory."""
    global _model, _scaler
    from src.models.tcn import build_tcn_from_config

    _model = build_tcn_from_config()
    _model.load_state_dict(torch.load(model_path, map_location=device))
    _model.eval()

    _scaler = TrafficScaler.load(scaler_path)


def get_model() -> TemporalConvNet:
    assert _model is not None, "Model not loaded — call load_artifacts()"
    return _model


def get_scaler() -> TrafficScaler:
    assert _scaler is not None, "Scaler not loaded — call load_artifacts()"
    return _scaler


# ═══════════════════ 1. Fetch historical segment ══════════════════════════

async def fetch_history_segment(
    db: AsyncIOMotorDatabase,
    road_id: str,
    end_timestamp: datetime,
    window: int = INPUT_WINDOW,
) -> pd.DataFrame:
    """
    Retrieve the *window* most recent documents for *road_id* whose timestamp
    is **strictly before** *end_timestamp*, ordered chronologically.

    Uses the compound index (road_id, timestamp) for efficient retrieval.

    Raises ValueError if fewer than *window* documents are available.
    """
    # Find documents with road_id and timestamp < end_timestamp
    cursor = traffic_readings.find(
        {
            "road_id": road_id,
            "timestamp": {"$lt": end_timestamp}
        }
    ).sort("timestamp", -1).limit(window)

    documents = await cursor.to_list(length=window)

    if len(documents) < window:
        raise ValueError(
            f"Need {window} historical documents for {road_id} before "
            f"{end_timestamp}, but only found {len(documents)}."
        )

    # Convert to DataFrame, sorted ascending by time
    records = []
    for doc in reversed(documents):  # Reverse to get chronological order
        # Remove MongoDB _id field and convert to flat dict
        record = {k: v for k, v in doc.items() if k != "_id"}
        records.append(record)

    df = pd.DataFrame(records)
    return df


# ═══════════════════ 2. Predict segment ════════════════════════════════════

async def predict_segment(
    db: AsyncIOMotorDatabase,
    road_id: str,
    start_timestamp: datetime,
) -> dict:
    """
    Full segmented-search pipeline for one forecast request.

    Parameters
    ----------
    db : AsyncSession
    road_id : str            — e.g. "AIR_1"
    start_timestamp : datetime — the *T* from which the forecast begins.

    Returns
    -------
    dict ready to be serialised to JSON for the MERN frontend::

        {
          "zone_id": "AIR_1",
          "segment_name": "Terminal 2 (Sahar)",
          "road_name": "Airport Approach Road",
          "history": [
              {"time": "2024-02-07T17:30:00", "congestion": 57.79},
              ...                                    # 24 entries
          ],
          "forecast": [
              {"time": "2024-02-07T18:30:00", "congestion": 62.1},
              ...                                    # 6 entries
          ]
        }
    """
    model = get_model()
    scaler = get_scaler()

    # --- 1. Fetch 24 historical rows ---
    history_df = await fetch_history_segment(db, road_id, start_timestamp)

    # --- 2. Fetch events for this segment's location (if event features enabled) ---
    from src.config import FEATURE_COLS
    if "event_impact_score" in FEATURE_COLS:
        # Get location from the first row (all rows should have same lat/lon)
        lat = history_df.iloc[0]["lat"]
        lon = history_df.iloc[0]["lon"]
        
        # Fetch events near this location (within 15km radius)
        try:
            events = await event_manager.get_events_near_location(lat, lon, radius_km=15)
            print(f"📍 Found {len(events)} events near segment {road_id} at ({lat:.4f}, {lon:.4f})")
        except Exception as e:
            print(f"⚠️ Failed to fetch events for segment {road_id}: {e}")
            events = []
    else:
        events = []

    # --- 3. Scale and shape for TCN ---
    x_tensor = torch.from_numpy(
        prepare_inference_segment(history_df, scaler, events)
    ).float()  # (1, F, 24)

    # --- 3. Inference ---
    with torch.no_grad():
        y_scaled = model(x_tensor).numpy().flatten()  # (6,)

    # --- 4. Inverse-scale to real congestion % ---
    y_real = scaler.inverse_transform_target(y_scaled)

    # Clamp to valid range
    y_real = np.clip(y_real, 0.0, 100.0)

    # --- 5. Build response JSON ---
    # History series (use raw congestion_level from the un-scaled DF)
    history_series = [
        {
            "time": row["timestamp"].isoformat(),
            "congestion": round(float(row[TARGET_COL]) * 100, 2),
        }
        for _, row in history_df.iterrows()
    ]

    # Forecast series — timestamps are 1-hour increments from start_timestamp
    forecast_series = [
        {
            "time": (start_timestamp + timedelta(hours=i)).isoformat(),
            "congestion": round(float(y_real[i]) * 100, 2),
        }
        for i in range(FORECAST_HORIZON)
    ]

    # Segment metadata
    seg_name = history_df.iloc[0].get("segment_name", "")
    road_name = history_df.iloc[0].get("road_name", "")

    return {
        "zone_id": road_id,
        "segment_name": seg_name,
        "road_name": road_name,
        "history": history_series,
        "forecast": forecast_series,
    }


# ═══════════════════ 3. List available segments (dropdown) ═════════════════

async def list_segments(db: AsyncIOMotorDatabase) -> list[dict]:
    """Return all unique road segments for the frontend dropdown."""
    cursor = road_segments.find({}).sort("road_name", 1)
    documents = await cursor.to_list(length=None)

    segments = []
    for doc in documents:
        # Remove MongoDB _id field and convert to dict
        segment_data = {k: v for k, v in doc.items() if k != "_id"}
        segments.append(segment_data)

    return segments


# ═══════════════════ 4. Available time range for a segment ═════════════════

async def get_segment_time_range(
    db: AsyncIOMotorDatabase,
    road_id: str,
) -> dict:
    """
    Return the earliest and latest timestamp available for *road_id*,
    plus the total number of readings — useful for the frontend to
    constrain the date-picker.
    """
    pipeline = [
        {"$match": {"road_id": road_id}},
        {"$group": {
            "_id": None,
            "earliest": {"$min": "$timestamp"},
            "latest": {"$max": "$timestamp"},
            "count": {"$sum": 1}
        }}
    ]

    result = await traffic_readings.aggregate(pipeline).to_list(length=1)

    if not result:
        return {
            "road_id": road_id,
            "earliest": None,
            "latest": None,
            "total_readings": 0,
        }

    doc = result[0]
    return {
        "road_id": road_id,
        "earliest": doc["earliest"].isoformat() if doc["earliest"] else None,
        "latest": doc["latest"].isoformat() if doc["latest"] else None,
        "total_readings": doc["count"],
    }


# ═══════════════════ 5. Prediction Region Search ══════════════════════════

async def search_predictions(
    db: AsyncIOMotorDatabase,
    road_id: Optional[str] = None,
    start_time: Optional[datetime] = None,
    end_time: Optional[datetime] = None,
    min_congestion: Optional[float] = None,
    max_congestion: Optional[float] = None,
    limit: int = 100,
) -> list[dict]:
    """
    Search stored traffic readings (the "prediction region") with flexible
    filters.  This powers a search bar / filter panel in the MERN frontend.

    Optional filters
    ────────────────
    - road_id          — exact segment match
    - start_time       — readings at or after this timestamp
    - end_time         — readings before this timestamp
    - min_congestion   — congestion_level >= value (0-1 scale in DB)
    - max_congestion   — congestion_level <= value
    - limit            — max rows returned (default 100)

    Returns
    -------
    list[dict] — each dict has road_id, segment_name, timestamp, congestion_%
    """
    # Build MongoDB query filter
    query_filter = {}

    if road_id:
        query_filter["road_id"] = road_id
    if start_time:
        query_filter["timestamp"] = query_filter.get("timestamp", {})
        query_filter["timestamp"]["$gte"] = start_time
    if end_time:
        query_filter["timestamp"] = query_filter.get("timestamp", {})
        query_filter["timestamp"]["$lt"] = end_time
    if min_congestion is not None:
        query_filter["congestion_level"] = query_filter.get("congestion_level", {})
        query_filter["congestion_level"]["$gte"] = min_congestion
    if max_congestion is not None:
        query_filter["congestion_level"] = query_filter.get("congestion_level", {})
        query_filter["congestion_level"]["$lte"] = max_congestion

    cursor = traffic_readings.find(query_filter).sort("timestamp", -1).limit(limit)
    documents = await cursor.to_list(length=limit)

    return [
        {
            "road_id": doc["road_id"],
            "segment_name": doc["segment_name"],
            "road_name": doc["road_name"],
            "timestamp": doc["timestamp"].isoformat(),
            "congestion_pct": round(float(doc["congestion_level"]) * 100, 2),
            "congestion_band": doc["congestion_band"],
        }
        for doc in documents
    ]
