"""
Datathon multi-horizon XGBoost model integration.
Loads pre-trained models, schema, and parquet dataset for inference.
"""

from __future__ import annotations

from pathlib import Path
from typing import Dict, Any
from datetime import datetime

import joblib
import pandas as pd
import xgboost as xgb
from fastapi import HTTPException
from sklearn.preprocessing import LabelEncoder

from src.config import (
    DATATHON_DIR,
    DATATHON_MODELS_DIR,
    DATATHON_DATA_PATH,
    DATATHON_SCHEMA_PATH,
    DATATHON_HORIZONS,
)

_models: Dict[int, Any] | None = None
_schema: Dict[str, Any] | None = None
_data_df: pd.DataFrame | None = None
_band_encoder: LabelEncoder | None = None


def _check_paths_exist():
    required = [DATATHON_MODELS_DIR, DATATHON_DATA_PATH, DATATHON_SCHEMA_PATH]
    missing = [str(p) for p in required if not Path(p).exists()]
    if missing:
        raise HTTPException(status_code=503, detail=f"Datathon artefacts missing: {missing}")


def load_datathon_artifacts() -> None:
    """Load parquet data, schema, and all horizon models."""
    global _models, _schema, _data_df, _band_encoder

    try:
        _check_paths_exist()
    except HTTPException as exc:
        print(exc.detail)
        return

    _schema = joblib.load(DATATHON_SCHEMA_PATH)

    _models = {}
    for h in DATATHON_HORIZONS:
        model_path = DATATHON_MODELS_DIR / f"xgb_congestion_plus_{h}h.pkl"
        if not model_path.exists():
            print(f"Datathon model missing: {model_path}")
            _models = None
            return
        _models[h] = joblib.load(model_path)

    _data_df = pd.read_parquet(DATATHON_DATA_PATH)
    # Ensure timestamp is pandas datetime
    if not pd.api.types.is_datetime64_any_dtype(_data_df["timestamp"]):
        _data_df["timestamp"] = pd.to_datetime(_data_df["timestamp"])

    # Load band encoder from FASTAPI_CLASSIFYMODEL to reuse label set
    encoder_path = DATATHON_DIR / "target_label_encoder.pkl"
    fallback_encoder_path = DATATHON_DIR.parent / "FASTAPI_CLASSIFYMODEL" / "target_label_encoder.pkl"
    for p in (encoder_path, fallback_encoder_path):
        if p.exists():
            _band_encoder = joblib.load(p)
            break

    print("Loaded Datathon models and data")


def _band_from_score(score: float) -> str:
    """Map numeric congestion (0-1) to qualitative band using encoder labels if available."""
    # Thresholds chosen to align with common bands
    if score < 0.2:
        label = "Free"
    elif score < 0.4:
        label = "Light"
    elif score < 0.6:
        label = "Moderate"
    elif score < 0.8:
        label = "Heavy"
    else:
        label = "Severe"

    if _band_encoder is not None:
        # Ensure label exists in encoder classes
        if label in _band_encoder.classes_:
            return label
        # fallback to first class if unexpected
        return _band_encoder.classes_[0]
    return label


def _prepare_onehot_row(raw_row_df: pd.DataFrame) -> pd.DataFrame:
    assert _schema is not None
    enc = pd.get_dummies(raw_row_df, columns=_schema["cat_cols"], drop_first=False)
    return enc.reindex(columns=_schema["feature_cols"], fill_value=0)


def _build_features_for_road_at_time(road_id: str, ts: datetime) -> pd.DataFrame:
    assert _schema is not None and _data_df is not None

    road_hist = _data_df[_data_df["road_id"] == road_id]
    road_hist = road_hist[road_hist["timestamp"] <= ts]

    if road_hist.empty:
        raise HTTPException(status_code=404, detail="No data available for selected road/time")

    row = road_hist.iloc[-1]
    feat_dict = {c: row[c] for c in _schema["features_before_encoding"]}
    if _schema.get("use_road_id_as_feature"):
        feat_dict["road_id"] = road_id

    return pd.DataFrame([feat_dict])


def predict_datathon(road_id: str, ts: datetime, current_congestion_pct: float | None = None) -> dict:
    if _models is None or _schema is None or _data_df is None:
        raise HTTPException(status_code=503, detail="Datathon artefacts not loaded")

    raw_row = _build_features_for_road_at_time(road_id, ts)
    X = _prepare_onehot_row(raw_row)

    preds = {}
    for h, model in _models.items():
        dmat = xgb.DMatrix(X, feature_names=list(X.columns))
        score = float(model.get_booster().predict(dmat)[0])
        preds[f"pred_congestion_plus_{h}h"] = score
        preds[f"pred_congestion_band_plus_{h}h"] = _band_from_score(score)

    # Autoregressive continuity: anchor first horizon to live congestion if provided
    if current_congestion_pct is not None:
        curr = max(0.0, min(100.0, float(current_congestion_pct)))
        curr_frac = curr / 100.0
        key = "pred_congestion_plus_1h"
        if key in preds:
            model_frac = max(0.0, min(1.0, preds[key]))
            anchored_frac = max(0.0, min(0.95, 0.7 * curr_frac + 0.3 * model_frac))
            preds[key] = anchored_frac
            preds["pred_congestion_band_plus_1h"] = _band_from_score(anchored_frac)

    # Alert logic (mirrors original inference.py)
    p1 = preds["pred_congestion_plus_1h"]
    p2 = preds["pred_congestion_plus_2h"]
    incidents = raw_row["recent_incident_count"].iloc[0]

    if p1 > 0.7:
        alert = "SEVERE congestion expected within 1 hour"
    elif p1 > 0.6 or p2 > 0.7:
        alert = "High congestion risk ahead"
    elif incidents >= 2:
        alert = "Incident-driven congestion possible"
    else:
        alert = "Traffic conditions expected to remain stable"

    return {
        "road_id": road_id,
        "timestamp": ts.isoformat(),
        **preds,
        "alert": alert,
    }
