import joblib
import pandas as pd
import numpy as np
import os



MODELS_DIR = "models"
HORIZONS = [1, 2, 6, 24]

# ---------- Load schema ----------
schema = joblib.load(os.path.join(MODELS_DIR, "onehot_schema.pkl"))

# ---------- Load models ----------
def load_models():
    models = {}
    for h in HORIZONS:
        models[h] = joblib.load(
            os.path.join(MODELS_DIR, f"xgb_congestion_plus_{h}h.pkl")
        )
    return models


# ---------- One-hot prep ----------
def _prepare_onehot_row(raw_row_df: pd.DataFrame) -> pd.DataFrame:
    enc = pd.get_dummies(
        raw_row_df,
        columns=schema["cat_cols"],
        drop_first=False
    )
    return enc.reindex(columns=schema["feature_cols"], fill_value=0)


# ---------- Feature builder ----------
def build_features_for_road_at_time(
    full_df: pd.DataFrame,
    road_id: str,
    ts: pd.Timestamp
) -> pd.DataFrame:

    road_hist = full_df[full_df["road_id"] == road_id]
    road_hist = road_hist[road_hist["timestamp"] <= ts]

    if road_hist.empty:
        raise ValueError("No data available for selected road/time")

    row = road_hist.iloc[-1]

    feat_dict = {c: row[c] for c in schema["features_before_encoding"]}
    if schema["use_road_id_as_feature"]:
        feat_dict["road_id"] = road_id

    return pd.DataFrame([feat_dict])


# ---------- Prediction ----------
def predict_all_horizons(full_df, road_id, ts, models):
    raw_row = build_features_for_road_at_time(full_df, road_id, ts)
    X = _prepare_onehot_row(raw_row)

    out = {}
    for h, m in models.items():
        out[f"pred_congestion_plus_{h}h"] = float(m.predict(X)[0])

    return out, raw_row


# ---------- Alert logic ----------
def congestion_alert_logic(preds, raw_row):
    p1 = preds["pred_congestion_plus_1h"]
    p2 = preds["pred_congestion_plus_2h"]
    incidents = raw_row["recent_incident_count"].iloc[0]

    if p1 > 0.7:
        return "🚨 SEVERE congestion expected within 1 hour"
    if p1 > 0.6 or p2 > 0.7:
        return "⚠️ High congestion risk ahead"
    if incidents >= 2:
        return "⚠️ Incident-driven congestion possible"
    return "✅ Traffic conditions expected to remain stable"


def predict_with_alert(full_df, road_id, ts, models):
    preds, raw_row = predict_all_horizons(full_df, road_id, ts, models)
    preds["alert"] = congestion_alert_logic(preds, raw_row)
    return preds
