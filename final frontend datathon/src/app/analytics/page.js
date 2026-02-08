"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Clock, MapPin, TrendingUp } from "lucide-react";

import { Navbar } from "@/components/ui/Navbar";
import { fetchDatathonForecast, searchPredictions } from "@/lib/api";
import TrafficChatbot from "@/components/dashboard/TrafficChatbot";
import { useDashboardContext } from "@/hooks/useDashboardContext";
import { ForecastingChart } from "@/components/dashboard/ForecastingChart";

export default function AnalyticsPage() {
    const [liveReadings, setLiveReadings] = useState([]);
    const [selectedSegment, setSelectedSegment] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loadingForecast, setLoadingForecast] = useState(false);
    const [error, setError] = useState("");
    const context = useDashboardContext();

    // Fetch metadata + live congestion snapshots (synthetic when backend lacks live stream)
    useEffect(() => {
        let mounted = true;
        const load = () => searchPredictions().then((data) => mounted && setLiveReadings(data)).catch(() => {});
        load();
        const id = setInterval(load, 5 * 60 * 1000); // refresh every 5 minutes
        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, []);

    // Default selection: top hotspot once readings load
    useEffect(() => {
        if (selectedSegment || !liveReadings.length) return;
        const top = getHotspots(liveReadings)[0];
        if (top) setSelectedSegment(top);
    }, [liveReadings, selectedSegment]);

    // Fetch forecast when selected changes
    useEffect(() => {
        if (!selectedSegment) return;
        let mounted = true;
        const fetchForecast = () => {
            setLoadingForecast(true);
            setError("");
            fetchDatathonForecast(
                selectedSegment.road_id,
                new Date().toISOString(),
                selectedSegment.congestion_pct,
            )
                .then((data) => mounted && setForecast(data))
                .catch((err) => mounted && setError(err.message))
                .finally(() => mounted && setLoadingForecast(false));
        };

        fetchForecast();
        const id = setInterval(fetchForecast, 5 * 60 * 1000); // refresh every 5 minutes

        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, [selectedSegment]);

    const hotspots = useMemo(() => getHotspots(liveReadings), [liveReadings]);

    const chartData = useMemo(() => {
        if (!forecast) return [];
        const now = new Date(forecast.timestamp || Date.now());
        const current = {
            hour: 0,
            label: "Now",
            time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            value: selectedSegment?.congestion_pct ?? 0,
        };
        const entries = [
            { key: "pred_congestion_plus_1h", hours: 1 },
            { key: "pred_congestion_plus_2h", hours: 2 },
            { key: "pred_congestion_plus_6h", hours: 6 },
            { key: "pred_congestion_plus_24h", hours: 24 },
        ];
        const future = entries.map((e) => ({
            hour: e.hours,
            label: `+${e.hours}h`,
            time: new Date(now.getTime() + e.hours * 3600 * 1000)
                .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            value: (forecast[e.key] ?? 0) * 100,
        }));
        return [current, ...future];
    }, [forecast, selectedSegment]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#05060a] via-[#0b0f1a] to-[#05060a] text-foreground pb-20">
            <Navbar />
            <div className="pt-24 px-4 max-w-7xl mx-auto space-y-6">
                <header className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-400/70">
                        <div className="h-px w-8 bg-cyan-500" />
                        Live Predictive Ops
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div>
                            <h1 className="text-3xl font-semibold text-white">Analytics Dashboard</h1>
                            <p className="text-sm text-slate-400">Linked hotspots → forecast → travel estimator.</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Clock className="h-4 w-4 text-cyan-400" /> {context.loadingSummary ? "Context syncing…" : context.summary || "Live data stream"}
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <section className="lg:col-span-2 rounded-xl border border-cyan-500/10 bg-slate-950/60 shadow-[0_0_0_1px_rgba(0,255,255,0.08)] p-4 flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-cyan-400" /> Forecast
                                </h3>
                                <p className="text-xs text-slate-400">Datathon multi-horizon model, segment-linked.</p>
                            </div>
                        </div>

                        <div className="min-h-[320px] rounded-lg bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-cyan-500/10 p-3">
                            {error && <p className="text-xs text-red-400 mb-2">{error}</p>}
                            {loadingForecast && <p className="text-xs text-slate-300">Fetching forecast…</p>}
                            {!loadingForecast && chartData.length === 0 && (
                                <p className="text-xs text-slate-400">Select a hotspot to load predictions.</p>
                            )}
                            {chartData.length > 0 && (
                                <ForecastingChart context={context} data={chartData} />
                            )}
                        </div>
                        {forecast && (
                            <div className="text-xs text-slate-400 grid grid-cols-2 gap-2">
                                <div className="flex items-center justify-between rounded-lg border border-cyan-500/15 bg-slate-900/60 px-3 py-2">
                                    <span>+1h</span>
                                    <span className="text-cyan-200 font-semibold">{formatPct(forecast.pred_congestion_plus_1h)}</span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg border border-cyan-500/15 bg-slate-900/60 px-3 py-2">
                                    <span>+2h</span>
                                    <span className="text-cyan-200 font-semibold">{formatPct(forecast.pred_congestion_plus_2h)}</span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg border border-cyan-500/15 bg-slate-900/60 px-3 py-2">
                                    <span>+6h</span>
                                    <span className="text-cyan-200 font-semibold">{formatPct(forecast.pred_congestion_plus_6h)}</span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg border border-cyan-500/15 bg-slate-900/60 px-3 py-2">
                                    <span>+24h</span>
                                    <span className="text-cyan-200 font-semibold">{formatPct(forecast.pred_congestion_plus_24h)}</span>
                                </div>
                            </div>
                        )}
                        {selectedSegment && (
                            <div className="text-xs text-slate-300">
                                Showing {selectedSegment.segment_name} ({selectedSegment.road_id}) · {chartData.length} horizons · live congestion {selectedSegment.congestion_pct?.toFixed?.(1) ?? "--"}%
                            </div>
                        )}
                    </section>

                    <section className="rounded-xl border border-amber-400/20 bg-slate-950/70 p-4 shadow-[0_0_0_1px_rgba(251,191,36,0.18)] flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-400" /> Top 5 Critical Roads
                            </h3>
                            <span className="text-[10px] px-2 py-1 rounded-full bg-amber-400/10 text-amber-200 border border-amber-400/30">Live</span>
                        </div>
                        <div className="space-y-2">
                            {hotspots.map((seg) => (
                                <button
                                    key={seg.road_id}
                                    onClick={() => setSelectedSegment(seg)}
                                    className={`w-full text-left rounded-lg border px-3 py-2 transition-colors ${
                                        selectedSegment?.road_id === seg.road_id
                                            ? "border-cyan-400/60 bg-cyan-900/30"
                                            : "border-amber-400/20 bg-amber-400/5 hover:border-amber-300/40"
                                    }`}
                                >
                                    <div className="flex items-center justify-between text-sm text-white">
                                        <span>{seg.segment_name}</span>
                                        <span className="text-amber-200 font-semibold">{seg.congestion_pct.toFixed(1)}%</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px] text-amber-200/90">
                                        <MapPin className="h-3 w-3" /> {seg.road_name}
                                    </div>
                                </button>
                            ))}
                            {!hotspots.length && (
                                <p className="text-xs text-amber-200/70">Waiting for live readings…</p>
                            )}
                        </div>
                    </section>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <TrafficChatbot criticalSegments={hotspots} />
                </section>
            </div>
        </main>
    );
}

function getHotspots(readings) {
    return (readings || [])
        .filter((s) => (s.congestion_pct ?? 0) > 65)
        .sort((a, b) => b.congestion_pct - a.congestion_pct)
        .slice(0, 5);
}

function formatPct(v) {
    if (v == null) return "--";
    return `${(v * 100).toFixed(1)}%`;
}
