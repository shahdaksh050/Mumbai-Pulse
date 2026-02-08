"""
Lightweight classifier integration derived from FASTAPI_CLASSIFYMODEL.
Loads the pickled XGBoost model + encoders and exposes a predict helper
for congestion band classification using basic temporal features and
road-level context averages.
"""

from __future__ import annotations

import pickle
from datetime import datetime
from pathlib import Path
from typing import Any

import pandas as pd
from fastapi import HTTPException

from src.config import (
    CLASSIFIER_DATA_PATH,
    CLASSIFIER_MODEL_PATH,
    ROAD_ENCODER_PATH,
    TARGET_ENCODER_PATH,
)

_model: Any | None = None
_road_encoder: Any | None = None
_target_encoder: Any | None = None
_road_context: pd.DataFrame | None = None


def _require_loaded() -> None:
    if _model is None or _road_encoder is None or _target_encoder is None:
        raise HTTPException(status_code=503, detail="Classifier artefacts not loaded")
    if _road_context is None:
        raise HTTPException(status_code=503, detail="Road context not available")


def _parse_timestamp(date_str: str, time_str: str) -> datetime:
    try:
        return datetime.fromisoformat(f"{date_str} {time_str}")
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=f"Invalid date/time: {exc}") from exc


def load_classifier_artifacts() -> None:
    """Load the XGBoost classifier, encoders, and road context dataset."""
    global _model, _road_encoder, _target_encoder, _road_context

    paths = [CLASSIFIER_MODEL_PATH, ROAD_ENCODER_PATH, TARGET_ENCODER_PATH, CLASSIFIER_DATA_PATH]
    missing = [str(p) for p in paths if not Path(p).exists()]
    if missing:
        print(f"⚠ Classifier artefacts missing: {missing}")
        return

    with open(CLASSIFIER_MODEL_PATH, "rb") as f:
        try:
            _model = pickle.load(f)
        except ModuleNotFoundError as exc:
            # Gracefully degrade if the model's dependency (e.g., xgboost) is missing
            print(f"Classifier dependency missing: {exc}. Install xgboost to enable /api/classify")
            _model = None
            _road_encoder = None
            _target_encoder = None
            _road_context = None
            return
    with open(ROAD_ENCODER_PATH, "rb") as f:
        _road_encoder = pickle.load(f)
    with open(TARGET_ENCODER_PATH, "rb") as f:
        _target_encoder = pickle.load(f)

    df = pd.read_csv(CLASSIFIER_DATA_PATH)
    _road_context = df.groupby("road_id").agg(
        {
            "avg_speed_kph": "mean",
            "accident_hotspot_score": "mean",
            "recent_incident_count": "mean",
            "enforcement_violation_pattern": "mean",
            "long_term_risk_prior": "mean",
        }
    ).reset_index()

    print("Loaded classifier artefacts")


def predict_congestion_band(road_id: str, date: str, time: str) -> dict:
    _require_loaded()

    timestamp = _parse_timestamp(date, time)
    hour = timestamp.hour
    day_of_week = timestamp.weekday()
    is_weekend = 1 if day_of_week >= 5 else 0
    month = timestamp.month

    road_row = _road_context[_road_context["road_id"] == road_id]
    if road_row.empty:
        raise HTTPException(status_code=404, detail="Invalid road_id")

    road = road_row.iloc[0]
    road_id_encoded = _road_encoder.transform([road_id])[0]

    model_input = pd.DataFrame(
        [
            {
                "road_id_encoded": road_id_encoded,
                "hour": hour,
                "day_of_week": day_of_week,
                "is_weekend": is_weekend,
                "month": month,
                "hourly_speed_kph": road["avg_speed_kph"],
                "avg_speed_kph": road["avg_speed_kph"],
                "accident_hotspot_score": road["accident_hotspot_score"],
                "recent_incident_count": int(road["recent_incident_count"]),
                "enforcement_violation_pattern": road["enforcement_violation_pattern"],
                "long_term_risk_prior": road["long_term_risk_prior"],
            }
        ]
    )

    prediction = _model.predict(model_input)
    congestion = _target_encoder.inverse_transform(prediction)[0]

    return {
        "road_id": road_id,
        "timestamp": timestamp.isoformat(),
        "predicted_congestion": congestion,
    }
