"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { fetchDatathonForecast, fetchSegments, searchPredictions } from "@/lib/api";

const LeafletMap = dynamic(() => import("@/components/dashboard/LeafletMap"), { ssr: false });

export default function NavigatorDashboard() {
    const searchParams = useSearchParams();
    const [segments, setSegments] = useState([]);
    const [selectedRoadId, setSelectedRoadId] = useState("");
    const [liveReadings, setLiveReadings] = useState([]);
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        let mounted = true;
        fetchSegments()
            .then((data) => {
                if (!mounted) return;
                const list = Array.isArray(data) ? data : [];
                setSegments(list);
                if (!selectedRoadId && list.length) setSelectedRoadId(list[0].road_id);
            })
            .catch(() => {});
        return () => { mounted = false; };
    }, [selectedRoadId]);

    const sortedSegments = useMemo(() => {
        return [...segments].sort((a, b) => {
            const nameA = (a.segment_name || a.road_name || "").toLowerCase();
            const nameB = (b.segment_name || b.road_name || "").toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }, [segments]);

    const selectedSegment = useMemo(
        () => sortedSegments.find((s) => s.road_id === selectedRoadId) || sortedSegments[0],
        [selectedRoadId, sortedSegments]
    );

    const selectedLive = useMemo(
        () => liveReadings.find((r) => r.road_id === selectedRoadId),
        [liveReadings, selectedRoadId]
    );

    useEffect(() => {
        let mounted = true;
        const load = () => searchPredictions().then((data) => mounted && setLiveReadings(data)).catch(() => {});
        load();
        const id = setInterval(load, 5 * 60 * 1000);
        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, []);

    useEffect(() => {
        const rid = searchParams.get("road_id");
        if (!rid || !segments.length) return;
        const exists = segments.find((s) => s.road_id === rid);
        if (exists) setSelectedRoadId(rid);
    }, [searchParams, segments]);

    useEffect(() => {
        if (!selectedRoadId) return;
        let mounted = true;
        const fetchOnce = () => {
            setLoading(true);
            setError("");
            fetchDatathonForecast(selectedRoadId, new Date().toISOString(), selectedLive?.congestion_pct)
                .then((data) => {
                    if (mounted) setPrediction(data);
                })
                .catch((err) => mounted && setError(err.message))
                .finally(() => mounted && setLoading(false));
        };

        fetchOnce();
        const id = setInterval(fetchOnce, 5 * 60 * 1000); // refresh every 5 minutes

        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, [selectedRoadId, selectedLive?.congestion_pct]);

    const chartData = useMemo(() => {
        if (!prediction) return [];
        const base = new Date(prediction.timestamp || Date.now());
        const current = {
            label: "Now",
            value: selectedLive?.congestion_pct ?? 0,
            time: base.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        const entries = [
            { key: "pred_congestion_plus_1h", hours: 1 },
            { key: "pred_congestion_plus_2h", hours: 2 },
            { key: "pred_congestion_plus_6h", hours: 6 },
            { key: "pred_congestion_plus_24h", hours: 24 },
        ];
        const future = entries
            .map(({ key, hours }) => {
                const v = prediction[key];
                if (v == null) return null;
                return {
                    label: `+${hours}h`,
                    value: v * 100,
                    time: new Date(base.getTime() + hours * 3600 * 1000).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                };
            })
            .filter(Boolean);
        return [current, ...future];
    }, [prediction, selectedLive]);

    const mapCenter = selectedSegment?.lat && selectedSegment?.lon ? [selectedSegment.lat, selectedSegment.lon] : [19.076, 72.8777];
    const mapMarkers = selectedSegment?.lat && selectedSegment?.lon
        ? [{
            id: selectedSegment.road_id,
            lat: selectedSegment.lat,
            lng: selectedSegment.lon,
            title: selectedSegment.segment_name,
            road_name: selectedSegment.road_name,
            congestion: selectedLive?.congestion_pct,
            band: selectedLive?.congestion_band,
            speed: selectedLive?.speed_kmph,
        }]
        : [];

    return (
        <div className="h-[calc(100vh-80px)] p-6 gap-6 grid grid-cols-1 lg:grid-cols-2 grid-rows-[45%_1fr] bg-background text-foreground">
            <div className="flex flex-col gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Select Road Segment</label>
                    <select
                        className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm"
                        value={selectedRoadId}
                        onChange={(e) => setSelectedRoadId(e.target.value)}
                        disabled={!sortedSegments.length}
                    >
                        {sortedSegments.map((seg) => (
                            <option key={seg.road_id} value={seg.road_id}>
                                {seg.segment_name || seg.road_name || seg.road_id} ({seg.road_name})
                            </option>
                        ))}
                    </select>
                </div>

                {selectedSegment && (
                    <div className="rounded-lg border border-gray-800 bg-gray-950/80 p-4 space-y-2">
                        <div className="text-sm text-gray-100 font-semibold">{selectedSegment.segment_name}</div>
                        <div className="text-xs text-gray-400">{selectedSegment.road_name}</div>
                        <div className="text-xs text-gray-500">
                            ID: <span className="font-mono text-gray-200">{selectedSegment.road_id}</span>
                        </div>
                        {selectedSegment.lat != null && selectedSegment.lon != null && (
                            <div className="text-xs text-gray-500">
                                Coords: {selectedSegment.lat}, {selectedSegment.lon}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="h-full w-full rounded-xl overflow-hidden border border-gray-800">
                <LeafletMap center={mapCenter} zoom={selectedSegment ? 14 : 12} markers={mapMarkers} />
            </div>

            <div className="lg:col-span-2 bg-gray-900/50 p-6 rounded-xl border border-gray-800 min-h-[280px] flex flex-col">
                {error && <p className="text-sm text-red-400 mb-2">{error}</p>}
                {loading && <p className="text-sm text-muted-foreground mb-2">Loading forecast…</p>}
                <div className="flex-1 min-h-[220px]">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                        <LineChart data={chartData} margin={{ top: 16, right: 16, bottom: 8, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} vertical={false} />
                            <XAxis dataKey="label" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} dy={8} />
                            <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                            <Tooltip
                                contentStyle={{ background: "var(--popover)", border: `1px solid var(--border)`, color: "var(--popover-foreground)" }}
                                labelStyle={{ color: "var(--muted-foreground)" }}
                                formatter={(v) => [`${v?.toFixed?.(1) ?? v}%`, "Congestion"]}
                            />
                            <Line type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={2} dot={{ r: 3, fill: "var(--primary)" }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
