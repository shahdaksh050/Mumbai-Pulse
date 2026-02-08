"""
Central configuration for the Urban Traffic Congestion Forecasting System.
All hyperparameters, paths, and feature definitions live here.
"""

import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# ──────────────────────────── Paths ────────────────────────────
ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
MODEL_DIR = ROOT_DIR / "models"
MODEL_PATH = MODEL_DIR / "tcn_congestion.pt"
SCALER_PATH = MODEL_DIR / "scaler.joblib"

# Legacy classifier artefacts (XGBoost band classifier)
CLASSIFIER_DIR = ROOT_DIR / "FASTAPI_CLASSIFYMODEL"
CLASSIFIER_MODEL_PATH = CLASSIFIER_DIR / "xgb_congestion_model.pkl"
ROAD_ENCODER_PATH = CLASSIFIER_DIR / "road_id_encoder.pkl"
TARGET_ENCODER_PATH = CLASSIFIER_DIR / "target_label_encoder.pkl"
CLASSIFIER_DATA_PATH = DATA_DIR / "mumbai_synthetic_congestion_dataset_2y.csv"

# Datathon multi-horizon XGBoost artefacts
DATATHON_DIR = ROOT_DIR / "Datathon"
DATATHON_MODELS_DIR = DATATHON_DIR / "models"
DATATHON_DATA_PATH = DATATHON_DIR / "traffic_data.parquet"
DATATHON_SCHEMA_PATH = DATATHON_MODELS_DIR / "onehot_schema.pkl"
DATATHON_HORIZONS = [1, 2, 6, 24]

# ──────────────────────────── Database ─────────────────────────
# MongoDB Atlas connection string
# Set this in your .env file as MONGODB_URL
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/traffic_db?retryWrites=true&w=majority")

# Database name
DATABASE_NAME = os.getenv("DATABASE_NAME", "traffic_db")

# ──────────────────────────── Features ─────────────────────────
# These must match the columns used during training in the exact order.
FEATURE_COLS = [
    "hourly_speed_kph",
    "avg_speed_kph",
    "travel_time_s",
    "delay_ratio",
    "congestion_level",          # <-- target column (also an input feature)
    "accident_hotspot_score",
    "recent_incident_count",
    "enforcement_violation_pattern",
    "long_term_risk_prior",
    "hour_sin",                  # cyclic time encoding
    "hour_cos",
    "dow_sin",                   # day-of-week cyclic encoding
    "dow_cos",
    "is_weekend",
    # Event-based features (commented out to match pre-trained model)
    # "event_impact_score",        # overall impact from nearby events (0-10)
    # "concert_nearby",            # binary flag for concerts within 5km
    # "sports_nearby",             # binary flag for sports events within 5km
    # "event_density",             # number of events within 10km
    # "high_impact_event",         # binary flag for high-impact events nearby
]

TARGET_COL = "congestion_level"
TARGET_IDX = FEATURE_COLS.index(TARGET_COL)   # index inside feature vector

NUM_FEATURES = len(FEATURE_COLS)              # 14

# ──────────────────────────── TCN Hyper-params ─────────────────
INPUT_WINDOW = 24          # 24 hours of history
FORECAST_HORIZON = 6       # predict 6 hours ahead
TCN_CHANNELS = [64, 64, 64, 64]       # one channel per dilation layer
TCN_KERNEL_SIZE = 3
TCN_DROPOUT = 0.3
DILATION_FACTORS = [1, 2, 4, 8]

# ──────────────────────────── Training ─────────────────────────
BATCH_SIZE = 64
LEARNING_RATE = 1e-3
EPOCHS = 80
TRAIN_SPLIT = 0.8

# ──────────────────────────── External APIs ────────────────────
# API keys for event and location data integration
# Get these from: https://www.eventbrite.com/platform/api/
# and https://console.cloud.google.com/apis/credentials
API_KEYS = {
    "eventbrite": None,  # Replace with your Eventbrite API key
    "google_maps": None,  # Replace with your Google Maps API key
    # Add more API keys as needed
}
