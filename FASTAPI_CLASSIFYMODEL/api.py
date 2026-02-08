# ============================================
# FASTAPI: TRAFFIC CONGESTION PREDICTION
# ============================================

import pickle
import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel

# -------------------------
# LOAD MODEL & ENCODERS
# -------------------------

with open("xgb_congestion_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("road_id_encoder.pkl", "rb") as f:
    road_encoder = pickle.load(f)

with open("target_label_encoder.pkl", "rb") as f:
    target_encoder = pickle.load(f)

# -------------------------
# LOAD DATASET & BUILD CONTEXT
# -------------------------

df = pd.read_csv("mumbai_synthetic_congestion_dataset_2y.csv")

road_context = df.groupby("road_id").agg({
    "avg_speed_kph": "mean",
    "accident_hotspot_score": "mean",
    "recent_incident_count": "mean",
    "enforcement_violation_pattern": "mean",
    "long_term_risk_prior": "mean"
}).reset_index()

# -------------------------
# FASTAPI APP
# -------------------------

app = FastAPI(
    title="Traffic Congestion Prediction API",
    description="Predict congestion band using road and time",
    version="1.0"
)

# -------------------------
# REQUEST SCHEMA
# -------------------------

class PredictionRequest(BaseModel):
    road_id: str
    date: str      # YYYY-MM-DD
    time: str      # HH:MM

# -------------------------
# API ENDPOINT
# -------------------------

@app.post("/predict")
def predict_congestion(request: PredictionRequest):
    # Parse time
    timestamp = pd.to_datetime(f"{request.date} {request.time}")

    hour = timestamp.hour
    day_of_week = timestamp.weekday()
    is_weekend = 1 if day_of_week >= 5 else 0
    month = timestamp.month

    # Road context
    road_row = road_context[road_context["road_id"] == request.road_id]

    if road_row.empty:
        return {"error": "Invalid road_id"}

    road = road_row.iloc[0]

    # Encode road_id
    road_id_encoded = road_encoder.transform([request.road_id])[0]

    # Build model input
    model_input = pd.DataFrame([{
        "road_id_encoded": road_id_encoded,
        "hour": hour,
        "day_of_week": day_of_week,
        "is_weekend": is_weekend,
        "month": month,
        "hourly_speed_kph": road["avg_speed_kph"],  # estimated
        "avg_speed_kph": road["avg_speed_kph"],
        "accident_hotspot_score": road["accident_hotspot_score"],
        "recent_incident_count": int(road["recent_incident_count"]),
        "enforcement_violation_pattern": road["enforcement_violation_pattern"],
        "long_term_risk_prior": road["long_term_risk_prior"]
    }])

    # Predict
    prediction = model.predict(model_input)
    congestion = target_encoder.inverse_transform(prediction)[0]

    return {
        "road_id": request.road_id,
        "timestamp": str(timestamp),
        "predicted_congestion": congestion
    }
