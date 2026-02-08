"use client";

import { useEffect, useMemo, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, ReferenceArea, Area } from "recharts";
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
        if (Array.isArray(data) && data.length) return; // external data mode: skip fetch
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
    }, [roadId, data]);

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
    }, [roadId, timestamp, data]);

    const chartData = useMemo(() => {
        const anchorData = Array.isArray(data) && data.length ? data : null;
        const baseForecast = forecast && !anchorData;
        if (!anchorData && !baseForecast) return [];

        const baseTime = baseForecast ? new Date(forecast.timestamp || timestamp) : new Date();
        const anchors = anchorData || [
            { hour: 1, key: "pred_congestion_plus_1h", band: forecast.pred_congestion_band_plus_1h },
            { hour: 2, key: "pred_congestion_plus_2h", band: forecast.pred_congestion_band_plus_2h },
            { hour: 6, key: "pred_congestion_plus_6h", band: forecast.pred_congestion_band_plus_6h },
            { hour: 24, key: "pred_congestion_plus_24h", band: forecast.pred_congestion_band_plus_24h },
        ].map((entry) => {
            const value = forecast?.[entry.key] != null ? forecast[entry.key] * 100 : null;
            if (value == null) return null;
            const t = new Date(baseTime.getTime() + entry.hour * 3600 * 1000);
            return {
                hour: entry.hour,
                value,
                band: entry.band,
                time: t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
        }).filter(Boolean);

        // Deduplicate by hour
        const seen = new Set();
        const deduped = [];
        for (const pt of anchors.sort((a, b) => a.hour - b.hour)) {
            if (seen.has(pt.hour)) continue;
            seen.add(pt.hour);
            deduped.push(pt);
        }
        return deduped;
    }, [data, forecast, timestamp]);

    const externalData = Array.isArray(data) && data.length;
    const showControls = !externalData;

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

            {!externalData && error && <p className="text-sm text-red-500 mb-2">{error}</p>}
            {!externalData && loading && <p className="text-sm text-muted-foreground mb-2">Fetching forecast…</p>}

            <div className="w-full min-h-[260px] min-w-0">
                <ResponsiveContainer width="100%" height={320} minWidth={0}>
                    <LineChart data={chartData} margin={{ top: 12, right: 16, bottom: 12, left: 0 }}>
                        <defs>
                            <linearGradient id="congestion-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.18} />
                                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} vertical={false} />
                        <XAxis
                            type="number"
                            dataKey="hour"
                            domain={[0, 24]}
                            ticks={[0, 4, 8, 12, 16, 20, 24]}
                            stroke="var(--muted-foreground)"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            dy={10}
                            tickFormatter={(v) => `+${v}h`}
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
                            labelFormatter={(hour) => `+${hour}h`}
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

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="none"
                            fill="url(#congestion-gradient)"
                            isAnimationActive={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="var(--primary)"
                            strokeWidth={3}
                            dot={{ r: 5, fill: "var(--primary)", stroke: "#0b1220", strokeWidth: 2 }}
                            activeDot={{ r: 6, strokeWidth: 0, fill: "var(--primary)" }}
                            isAnimationActive={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
