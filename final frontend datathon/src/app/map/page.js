"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";
import Link from "next/link";
import { Loader2, MapPin } from "lucide-react";

import { Navbar } from "@/components/ui/Navbar";
import { fetchSegments, searchPredictions } from "@/lib/api";

// Dynamically import Leaflet map to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/dashboard/LeafletMap"), {
    ssr: false,
    loading: () => <div className="w-full h-full min-h-[500px] animate-pulse bg-muted rounded-xl" />
});

const REFRESH_MS = 5 * 60 * 1000;

export default function MapPage() {
    const { segments, readings, loading, error } = useTrafficData(REFRESH_MS);
    const [query, setQuery] = useState("");
    const [tileTheme, setTileTheme] = useState("dark");
    const [selectedId, setSelectedId] = useState(null);

    const indexedSegments = useMemo(() => {
        const m = new Map();
        segments.forEach((s) => m.set(s.road_id, s));
        return m;
    }, [segments]);

    const latestReadings = useMemo(() => {
        const latest = new Map();
        readings.forEach((r) => {
            const existing = latest.get(r.road_id);
            const ts = r.timestamp ? new Date(r.timestamp).getTime() : 0;
            const exTs = existing?.timestamp ? new Date(existing.timestamp).getTime() : -Infinity;
            if (!existing || ts > exTs) {
                latest.set(r.road_id, r);
            }
        });
        return latest;
    }, [readings]);

    // Combine all segments with their latest reading (or placeholder) so we show every segment from DB
    const combinedSegments = useMemo(() => {
        return segments.map((seg) => {
            const reading = latestReadings.get(seg.road_id);
            return {
                ...seg,
                ...reading,
                congestion_pct: reading?.congestion_pct ?? null,
                timestamp: reading?.timestamp ?? null,
                source: reading ? "live" : "segment",
            };
        }).sort((a, b) => (b.congestion_pct ?? 0) - (a.congestion_pct ?? 0));
    }, [segments, latestReadings]);

    const filtered = useMemo(() => {
        const q = query.toLowerCase();
        return combinedSegments.filter((item) => {
            const hay = `${item.road_id} ${item.road_name || ""} ${item.segment_name || ""}`.toLowerCase();
            return !q || hay.includes(q);
        });
    }, [combinedSegments, query]);

    const colorFor = useCallback((pct) => {
        if (pct == null || Number.isNaN(pct)) return "#94a3b8"; // neutral gray when no live reading
        return pct >= 70 ? "#ef4444" : pct >= 40 ? "#f59e0b" : "#22c55e";
    }, []);

    const markers = useMemo(() => {
        return filtered
            .map((item, idx) => {
                const seg = indexedSegments.get(item.road_id) || item;
                if (seg?.lat == null || seg?.lon == null) return null;
                const pct = item.congestion_pct;
                const color = colorFor(pct);
                return {
                    id: `${item.road_id}-${idx}`,
                    linkedId: item.road_id,
                    lat: seg.lat,
                    lng: seg.lon,
                    color,
                    popupContent: (
                        <div className="p-2 space-y-1">
                            <p className="font-bold">{seg.segment_name || seg.road_name}</p>
                            <p className="text-sm text-muted-foreground">{item.road_id}</p>
                            <p className="text-sm">Congestion: {pct != null ? (pct.toFixed?.(1) ?? pct) + "%" : "No live reading"} {item.congestion_band ? `(${item.congestion_band})` : ""}</p>
                            <Link href={`/navigator?road_id=${item.road_id}`} className="text-primary text-sm font-semibold">View forecast →</Link>
                        </div>
                    ),
                };
            })
            .filter(Boolean);
    }, [filtered, indexedSegments, colorFor]);

    const onMarkerClick = useCallback((id) => {
        setSelectedId(id);
        const el = document.getElementById(`card-${id}`);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, []);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-20 px-4 max-w-7xl mx-auto space-y-6 h-[calc(100vh-80px)]">
                <div className="flex flex-col h-full gap-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <h1 className="text-2xl font-bold">Live Traffic Grid</h1>
                        <div className="flex items-center gap-2 text-sm text-emerald-500">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            System Online
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-6">
                        {/* Real Map Container */}
                        <div className="lg:col-span-2 h-full min-h-[500px] rounded-xl overflow-hidden border border-border relative">
                            <LeafletMap markers={markers} onMarkerClick={onMarkerClick} tileTheme={tileTheme} />
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                                </div>
                            )}
                        </div>

                        {/* Live feed and search */}
                        <div className="lg:col-span-1 h-full min-h-[500px] flex flex-col gap-4">
                            <div className="p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-3">
                                <p className="text-sm font-semibold">Search location</p>
                                <input
                                    className="w-full p-2.5 rounded-md bg-background border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Search by road, segment, or ID"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span>Map theme</span>
                                    <select
                                        className="bg-background border border-border/60 rounded-md px-2 py-1 text-xs"
                                        value={tileTheme}
                                        onChange={(e) => setTileTheme(e.target.value)}
                                    >
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                    </select>
                                </div>
                                {error && <p className="text-sm text-red-500">{error}</p>}
                                <p className="text-xs text-muted-foreground">Showing {filtered.length} of {combinedSegments.length} segments</p>
                            </div>

                            <div className="flex-1 overflow-auto rounded-xl border border-border bg-card/40 backdrop-blur-sm p-3 space-y-3">
                                <p className="text-sm font-semibold">Live traffic feed</p>
                                {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
                                {!loading && filtered.length === 0 && <p className="text-sm text-muted-foreground">No locations match your search.</p>}
                                {filtered.map((r, idx) => {
                                    const seg = indexedSegments.get(r.road_id) || r;
                                    const pct = r.congestion_pct;
                                    const color = colorFor(pct);
                                    const isSelected = selectedId === r.road_id;
                                    return (
                                        <div
                                            key={`${r.road_id}-${idx}`}
                                            id={`card-${r.road_id}`}
                                            onClick={() => setSelectedId(r.road_id)}
                                            className={clsx(
                                                "p-3 rounded-lg border bg-background/40 cursor-pointer transition-colors",
                                                isSelected ? "border-cyan-400/60 bg-cyan-900/10" : "border-border/60 hover:border-cyan-500/40"
                                            )}
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="space-y-0.5">
                                                    <p className="font-semibold text-sm text-foreground flex items-center gap-1">
                                                        <MapPin className="h-3 w-3 text-cyan-400" /> {seg.segment_name || seg.road_name || r.road_id}
                                                    </p>
                                                    <p className="text-[11px] text-muted-foreground">{seg.road_name} · {r.road_id}</p>
                                                </div>
                                                <span
                                                    className="text-[11px] px-2 py-1 rounded-full font-semibold"
                                                    style={{ backgroundColor: `${color}22`, color: color }}
                                                >
                                                    {pct != null ? `${pct.toFixed?.(1) ?? pct}%` : "—"}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between mt-2 text-[11px] text-muted-foreground">
                                                <span>{r.timestamp ? formatTime(r.timestamp) : "No live reading"}</span>
                                                <Link href={`/navigator?road_id=${r.road_id}`} className="text-primary font-semibold">View forecast</Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function useTrafficData(refreshMs = REFRESH_MS) {
    const [segments, setSegments] = useState([]);
    const [readings, setReadings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let mounted = true;
        const load = async () => {
            setLoading(true);
            try {
                const [segData, readingData] = await Promise.all([
                    fetchSegments(),
                    searchPredictions({ limit: 1000 })
                ]);
                if (!mounted) return;
                setSegments(segData || []);
                setReadings(readingData || []);
                setError("");
            } catch (err) {
                if (mounted) setError(err.message || "Failed to load map data");
            } finally {
                if (mounted) setLoading(false);
            }
        };
        load();
        const id = setInterval(load, refreshMs);
        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, [refreshMs]);

    return { segments, readings, loading, error };
}

function formatTime(ts) {
    if (!ts) return "--";
    const d = new Date(ts);
    if (Number.isNaN(d.getTime())) return ts;
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
