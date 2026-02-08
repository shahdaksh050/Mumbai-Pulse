from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from datetime import datetime
import pandas as pd
from inference import predict_with_alert, load_models

# -------------------------
# INIT APP
# -------------------------
app = FastAPI(
    title="Mumbai Traffic Congestion Forecasting API",
    description="Predict congestion for +1h, +2h, +6h, +24h horizons",
    version="1.0"
)

# -------------------------
# LOAD DATA AND MODELS
# -------------------------
print("Loading data and models...")
df = pd.read_parquet("traffic_data.parquet")
models = load_models()
print("✅ Data and models loaded")

# -------------------------
# REQUEST MODEL
# -------------------------
class PredictRequest(BaseModel):
    road_id: str
    timestamp: datetime

# -------------------------
# ROUTES
# -------------------------
@app.get("/")
def read_root():
    return {"message": "Mumbai Traffic Congestion Forecasting API. Use /predict endpoint."}

@app.post("/predict")
def predict_congestion(req: PredictRequest):
    try:
        out = predict_with_alert(df, req.road_id, pd.Timestamp(req.timestamp), models)
        return out
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/roads")
def list_roads():
    """List all available road IDs in the dataset"""
    return {"roads": df["road_id"].unique().tolist()}
