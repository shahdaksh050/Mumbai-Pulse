import streamlit as st
import pandas as pd
from datetime import datetime
from inference import predict_with_alert, load_models

@st.cache_resource
def load_all_models():
    return load_models()

models = load_all_models()

st.set_page_config(page_title="Mumbai Traffic Forecast", layout="centered")

st.title("🚦 Mumbai Traffic Congestion Forecasting")
st.caption("Multi-horizon congestion prediction (+1h, +2h, +6h, +24h)")

@st.cache_data(show_spinner="Loading traffic data...")
def load_data():
    return pd.read_parquet("traffic_data.parquet")


df = load_data()

road_id = st.selectbox("Select Road ID", sorted(df["road_id"].unique()))
ts = st.slider(
    "Select Time",
    min_value=df["timestamp"].min().to_pydatetime(),
    max_value=df["timestamp"].max().to_pydatetime(),
    value=df["timestamp"].max().to_pydatetime(),
    format="YYYY-MM-DD HH:mm"
)

if st.button("Predict Congestion"):
    out = predict_with_alert(df, road_id, pd.Timestamp(ts),models)

    st.subheader("📊 Forecast Results")
    for h in [1, 2, 6, 24]:
        st.metric(
            label=f"+{h} Hour Congestion",
            value=f"{out[f'pred_congestion_plus_{h}h']:.2f}"
        )

    st.subheader("🚨 Alert")
    st.success(out["alert"])
