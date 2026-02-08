"use client";

import { useEffect, useMemo, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ReferenceArea } from "recharts";
import { fetchSegments, fetchDatathonForecast } from "@/lib/api";
import { useDashboardContext } from "@/hooks/useDashboardContext";

function safeLocalValue(isoString) {
    try {
        const d = new Date(isoString);
        if (isNaN(d.getTime())) return "";
        return d.toISOString().slice(0, 16);
    } catch {
        return "";
    }
}

export function ForecastingChart({ context, data }) {
    const { events, rainWindow } = context || useDashboardContext();
    const [segments, setSegments] = useState([]);
    const [roadId, setRoadId] = useState("");
    const [timestamp, setTimestamp] = useState(() => new Date().toISOString());
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        let mounted = true;
        fetchSegments()
            .then((data) => {
                if (!mounted) return;
                setSegments(data || []);
                if (data && data.length && !roadId) {
                    setRoadId(data[0].road_id);
                }
            })
            .catch((err) => mounted && setError(err.message));
        return () => {
            mounted = false;
        };
    }, [roadId]);

    useEffect(() => {
        if (!roadId || !timestamp) return;
        if (Array.isArray(data) && data.length) return;
        let mounted = true;
        setLoading(true);
        fetchDatathonForecast(roadId, timestamp)
            .then((data) => {
                if (mounted) {
                    setForecast(data);
                    setError("");
                }
            })
            .catch((err) => mounted && setError(err.message))
            .finally(() => mounted && setLoading(false));
        return () => {
            mounted = false;
        };
    }, [roadId, timestamp]);

    const chartData = useMemo(() => {
        if (Array.isArray(data) && data.length) return data;
        if (!forecast) return [];
        const base = new Date(forecast.timestamp || timestamp);
        const entries = [
            { key: "pred_congestion_plus_1h", hours: 1, band: forecast.pred_congestion_band_plus_1h },
            { key: "pred_congestion_plus_2h", hours: 2, band: forecast.pred_congestion_band_plus_2h },
            { key: "pred_congestion_plus_6h", hours: 6, band: forecast.pred_congestion_band_plus_6h },
            { key: "pred_congestion_plus_24h", hours: 24, band: forecast.pred_congestion_band_plus_24h },
        ];
        return entries.map(({ key, hours, band }) => {
            const t = new Date(base.getTime() + hours * 60 * 60 * 1000);
            const value = forecast[key] != null ? forecast[key] * 100 : null;
            return {
                hour: hours,
                label: `+${hours}h`,
                time: t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                value,
                band,
            };
        }).filter((d) => d.value !== null);
    }, [data, forecast, timestamp]);

    const hotData = useMemo(() => chartData.map((d) => ({ ...d, hot: d.value >= 90 ? d.value : null })), [chartData]);

    const showControls = !(Array.isArray(data) && data.length);

    return (
        <div className="w-full min-h-[320px] flex flex-col p-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl min-w-0">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-foreground">Traffic Forecast (Datathon model)</h3>
                    <p className="text-xs text-muted-foreground">Live predictions from backend (+1h, +2h, +6h, +24h)</p>
                </div>
                {showControls && (
                    <div className="flex flex-col sm:flex-row gap-2 text-sm">
                        <select
                            className="p-2 rounded-md bg-background border border-border/60"
                            value={roadId}
                            onChange={(e) => setRoadId(e.target.value)}
                            disabled={!segments.length}
                        >
                            {!segments.length && <option>Loading roads...</option>}
                            {segments.map((seg) => (
                                <option key={seg.road_id} value={seg.road_id}>
                                    {seg.road_name} ({seg.road_id})
                                </option>
                            ))}
                        </select>
                        <input
                            type="datetime-local"
                            className="p-2 rounded-md bg-background border border-border/60"
                            value={safeLocalValue(timestamp)}
                            onChange={(e) => {
                                const val = e.target.value;
                                if (!val) return;
                                const dt = new Date(val);
                                if (!isNaN(dt.getTime())) {
                                    setTimestamp(dt.toISOString());
                                }
                            }}
                        />
                    </div>
                )}
            </div>

            {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
            {loading && <p className="text-sm text-muted-foreground mb-2">Fetching forecast…</p>}

            <div className="w-full min-h-[260px] min-w-0">
                <ResponsiveContainer width="100%" height={320} minWidth={0}>
                    <LineChart data={hotData} margin={{ top: 12, right: 16, bottom: 8, left: 0 }}>
                        <defs>
                            <linearGradient id="congestion-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--primary)" stopOpacity={1} />
                                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.85} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} vertical={false} />
                        <XAxis
                            dataKey="hour"
                            stroke="var(--muted-foreground)"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            dy={10}
                            tickFormatter={(v) => `+${v}h`}
                            domain={[0, 24]}
                            type="number"
                        />
                        <YAxis
                            stroke="var(--muted-foreground)"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value?.toFixed?.(0) || value}%`}
                            dx={-10}
                            domain={[0, 100]}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "var(--popover)",
                                borderColor: "var(--border)",
                                color: "var(--popover-foreground)",
                                borderRadius: "var(--radius)",
                            }}
                            labelStyle={{ color: "var(--muted-foreground)" }}
                            formatter={(value, name, props) => {
                                const band = props?.payload?.band;
                                return [`${value?.toFixed?.(2)}%${band ? ` (${band})` : ""}`, "Congestion"];
                            }}
                        />

                        {rainWindow && (
                            <ReferenceArea
                                x1={rainWindow.start}
                                x2={rainWindow.end}
                                y1={0}
                                y2={100}
                                fill="blue"
                                fillOpacity={0.1}
                                stroke="none"
                            />
                        )}

                        {events?.map((event, idx) => (
                            <ReferenceArea
                                key={`${event.name}-${idx}`}
                                x1={event.start}
                                x2={event.end}
                                y1={0}
                                y2={100}
                                fill="purple"
                                fillOpacity={0.08}
                                stroke="none"
                            />
                        ))}

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="url(#congestion-gradient)"
                            strokeWidth={2.5}
                            dot={{ r: 4, fill: "var(--primary)", strokeWidth: 0 }}
                            activeDot={{ r: 6, strokeWidth: 0, fill: "var(--primary)" }}
                            isAnimationActive={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="hot"
                            stroke="red"
                            strokeWidth={3}
                            dot={false}
                            connectNulls
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
