"""
FastAPI router — all REST endpoints for the MERN frontend.

Endpoints
─────────
GET  /api/segments              — dropdown list of unique road segments
GET  /api/segments/{id}/range   — earliest/latest timestamp for a segment
POST /api/forecast              — segmented search + TCN inference
POST /api/search                — search stored readings (prediction region)
GET  /api/health                — liveness probe
"""

from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from motor.motor_asyncio import AsyncIOMotorDatabase

from src.db.models import get_db
from src.api.schemas import (
    SegmentOut,
    TimeRangeOut,
    CongestionClassifyRequest,
    CongestionClassifyResponse,
    DatathonForecastRequest,
    DatathonForecastResponse,
)
from src.api.logic import (
    list_segments,
    get_segment_time_range,
)
from src.api.classifier import predict_congestion_band
from src.api.datathon import predict_datathon

router = APIRouter(prefix="/api", tags=["traffic"])


# ──────────────────────── Health-check ─────────────────────────────────────

@router.get("/health")
async def health():
    return {"status": "ok"}


# ──────────────────────── Segments (dropdown) ──────────────────────────────

@router.get("/segments", response_model=list[SegmentOut])
async def get_segments(db: AsyncIOMotorDatabase = Depends(get_db)):
    """Return all unique road segments for the React dropdown."""
    return await list_segments(db)


@router.get("/segments/{road_id}/range", response_model=TimeRangeOut)
async def get_range(road_id: str, db: AsyncIOMotorDatabase = Depends(get_db)):
    """Return the available time range for a specific segment."""
    return await get_segment_time_range(db, road_id)


# ──────────────────────── Legacy classifier (band) ────────────────────────

@router.post("/classify", response_model=CongestionClassifyResponse)
async def classify(req: CongestionClassifyRequest):
    """Predict congestion band using the XGBoost classifier."""
    try:
        return predict_congestion_band(req.road_id, req.date, req.time)
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Classification error: {exc}")


# ──────────────────────── Datathon multi-horizon model ────────────────────

@router.post("/datathon/forecast", response_model=DatathonForecastResponse)
async def datathon_forecast(req: DatathonForecastRequest):
    """Predict +1h, +2h, +6h, +24h congestion using the Datathon XGBoost models."""
    try:
        return predict_datathon(req.road_id, req.timestamp, req.current_congestion_pct)
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Datathon inference error: {exc}")
