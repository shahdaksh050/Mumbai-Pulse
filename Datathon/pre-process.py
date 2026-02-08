# pre-process.py
import pandas as pd
import os

# -------------------------
# CONFIG
# -------------------------
DATA_PATH = "mumbai_synthetic_congestion_dataset_2y.csv"  # your raw CSV
OUTPUT_PARQUET = "traffic_data.parquet"
LAGS = [1, 2, 3, 6, 24]  # lag hours
ROAD_ID_AS_FEATURE = True  # include road_id as a categorical feature

# -------------------------
# 1) LOAD DATA
# -------------------------
df = pd.read_csv(DATA_PATH, parse_dates=["timestamp"])

# Sort by road and time
df = df.sort_values(["road_id", "timestamp"]).reset_index(drop=True)

# -------------------------
# 2) CREATE LAG FEATURES
# -------------------------
# congestion level lags
for lag in LAGS:
    df[f"congestion_lag_{lag}"] = df.groupby("road_id")["congestion_level"].shift(lag)

# speed and delay lags
df["speed_lag_1"] = df.groupby("road_id")["avg_speed_kph"].shift(1)
df["delay_lag_1"] = df.groupby("road_id")["delay_ratio"].shift(1)

# -------------------------
# 3) TIME FEATURES
# -------------------------
df["hour"] = df["timestamp"].dt.hour
df["day_of_week"] = df["timestamp"].dt.dayofweek
df["is_weekend"] = df["day_of_week"] >= 5
df["month"] = df["timestamp"].dt.month

# -------------------------
# 4) CLEAN DATA
# -------------------------
# Drop rows with any missing values (first few rows per road will have NaNs from lags)
df = df.dropna().reset_index(drop=True)

# -------------------------
# 5) SAVE PARQUET
# -------------------------
df.to_parquet(OUTPUT_PARQUET, index=False)

print(f"✅ Saved '{OUTPUT_PARQUET}' with all required features for model inference")
print("Columns in parquet:", df.columns.tolist())
