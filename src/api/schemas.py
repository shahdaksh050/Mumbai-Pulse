"""
Pydantic schemas for request / response validation.
"""

from __future__ import annotations

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, Field, field_validator


# ─────────────── Segment dropdown ──────────────────────────────────────────

class SegmentOut(BaseModel):
    road_id: str
    road_name: str
    segment_name: str
    lat: Optional[float] = None
    lon: Optional[float] = None
    road_class: Optional[str] = None


# ─────────────── Forecast request / response ───────────────────────────────

class ForecastRequest(BaseModel):
    road_id: str = Field(..., description="Unique road segment ID, e.g. 'AIR_1'")
    timestamp: datetime = Field(
        ...,
        description="The point-in-time T from which the 6-hour forecast begins. "
        "The system fetches the 24 hours of data *before* this timestamp.",
    )

    @field_validator('timestamp')
    @classmethod
    def timestamp_not_in_future(cls, v):
        if v > datetime.now(v.tzinfo):
            raise ValueError('Forecast timestamp cannot be in the future - we need historical data to make predictions')
        return v


class TimePoint(BaseModel):
    time: str
    congestion: float


class ForecastResponse(BaseModel):
    zone_id: str
    segment_name: str
    road_name: str
    history: List[TimePoint]
    forecast: List[TimePoint]


# ─────────────── Time Range ────────────────────────────────────────────────

class TimeRangeOut(BaseModel):
    road_id: str
    earliest: Optional[str] = None
    latest: Optional[str] = None
    total_readings: int


# ─────────────── Prediction Search ─────────────────────────────────────────

class PredictionSearchQuery(BaseModel):
    road_id: Optional[str] = None
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None
    min_congestion: Optional[float] = Field(
        None, ge=0, le=100, description="Min congestion % (0-100)"
    )
    max_congestion: Optional[float] = Field(
        None, ge=0, le=100, description="Max congestion % (0-100)"
    )
    limit: int = Field(100, ge=1, le=1000)

    @field_validator('max_congestion')
    @classmethod
    def validate_congestion_range(cls, v, info):
        if v is not None and info.data.get('min_congestion') is not None:
            if v < info.data['min_congestion']:
                raise ValueError('max_congestion must be greater than or equal to min_congestion')
        return v

    @field_validator('end_time')
    @classmethod
    def validate_time_range(cls, v, info):
        if v is not None and info.data.get('start_time') is not None:
            if v <= info.data['start_time']:
                raise ValueError('end_time must be after start_time')
        return v


class PredictionSearchResult(BaseModel):
    road_id: str
    segment_name: Optional[str] = None
    road_name: Optional[str] = None
    timestamp: str
    congestion_pct: float
    congestion_band: Optional[str] = None


# ─────────────── Classifier (congestion band) ─────────────────────────────

class CongestionClassifyRequest(BaseModel):
    road_id: str
    date: str  # YYYY-MM-DD
    time: str  # HH:MM


class CongestionClassifyResponse(BaseModel):
    road_id: str
    timestamp: str
    predicted_congestion: str


# ─────────────── Datathon multi-horizon model ─────────────────────────────

class DatathonForecastRequest(BaseModel):
    road_id: str
    timestamp: datetime
    current_congestion_pct: Optional[float] = Field(
        None,
        ge=0,
        le=100,
        description="Optional live congestion percentage (0-100) to anchor forecasts",
    )


class DatathonForecastResponse(BaseModel):
    road_id: str
    timestamp: str
    pred_congestion_plus_1h: float
    pred_congestion_plus_2h: float
    pred_congestion_plus_6h: float
    pred_congestion_plus_24h: float
    pred_congestion_band_plus_1h: str
    pred_congestion_band_plus_2h: str
    pred_congestion_band_plus_6h: str
    pred_congestion_band_plus_24h: str
    alert: str
