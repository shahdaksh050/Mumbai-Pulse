"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation, MapPin, Activity } from "lucide-react";
import dynamic from "next/dynamic";

import { fetchSegments, fetchDatathonForecast } from "@/lib/api";

const REFRESH_MS = 5 * 60 * 1000;

// Dynamically import map to avoid SSR
const LeafletMap = dynamic(() => import("@/components/dashboard/LeafletMap"), {
    ssr: false,
    loading: () => <div className="w-full h-full min-h-[400px] animate-pulse bg-muted rounded-xl" />
});

export function SegmentNavigator() {
    const searchParams = useSearchParams();
    const [selectedSegment, setSelectedSegment] = useState("");
    const [selectedRoad, setSelectedRoad] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [segments, setSegments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [forecast, setForecast] = useState(null);
    const [forecastError, setForecastError] = useState("");
    const [forecastLoading, setForecastLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        fetchSegments()
            .then((data) => {
                if (mounted) {
                    setSegments(data || []);
                }
            })
            .catch((err) => mounted && setError(err.message))
            .finally(() => mounted && setLoading(false));
        return () => {
            mounted = false;
        };
    }, []);


    // Apply URL param if present once segments are loaded
    useEffect(() => {
        const rid = searchParams.get("road_id");
        if (!rid || !segments.length) return;
        const match = segments.find((s) => s.road_id === rid);
        if (match) {
            setSelectedSegment(match.segment_name);
            setSelectedRoad(match.road_name);
            setSelectedId(match.road_id);
        }
    }, [searchParams, segments]);

    // Get unique segments
    const allSegments = useMemo(() =>
        Array.from(new Set(segments.map(d => d.segment_name))).sort(),
        [segments]);

    // Filter roads based on segment
    const filteredRoads = useMemo(() => {
        if (!selectedSegment) return [];
        return Array.from(new Set(
            segments.filter(d => d.segment_name === selectedSegment).map(d => d.road_name)
        ));
    }, [segments, selectedSegment]);

    // Reset road when segment changes
    const handleSegmentChange = (value) => {
        setSelectedSegment(value);
        setSelectedRoad("");
        setSelectedId("");
    };

    // Get selected data
    const selectedData = useMemo(() => {
        if (selectedId) return segments.find((d) => d.road_id === selectedId) || null;
        if (!selectedSegment || !selectedRoad) return null;
        return segments.find(d =>
            d.segment_name === selectedSegment && d.road_name === selectedRoad
        );
    }, [segments, selectedSegment, selectedRoad, selectedId]);

    // Fetch forecast for selected road
    useEffect(() => {
        if (!selectedData?.road_id) return;
        setForecastLoading(true);
        setForecastError("");
        const fetchForecast = () => {
            setForecastLoading(true);
            setForecastError("");
            fetchDatathonForecast(selectedData.road_id, new Date().toISOString())
                .then((data) => setForecast(data))
                .catch((err) => setForecastError(err.message))
                .finally(() => setForecastLoading(false));
        };

        fetchForecast();
        const id = setInterval(fetchForecast, REFRESH_MS);

        return () => clearInterval(id);
    }, [selectedData?.road_id]);

    const chartData = useMemo(() => {
        if (!forecast) return [];
        const entries = [
            { key: "pred_congestion_plus_1h", hours: 1 },
            { key: "pred_congestion_plus_2h", hours: 2 },
            { key: "pred_congestion_plus_6h", hours: 6 },
            { key: "pred_congestion_plus_24h", hours: 24 },
        ];
        const base = new Date(forecast.timestamp || Date.now());
        return entries.map(({ key, hours }) => ({
            label: `+${hours}h`,
            value: (forecast[key] ?? 0) * 100,
            time: new Date(base.getTime() + hours * 3600 * 1000)
                .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }));
    }, [forecast]);

    // Simulated status
    const getStatus = () => {
        const statuses = [
            { label: "Clear", color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { label: "Moderate", color: "text-yellow-500", bg: "bg-yellow-500/10" },
            { label: "Heavy", color: "text-orange-500", bg: "bg-orange-500/10" },
            { label: "Gridlock", color: "text-red-500", bg: "bg-red-500/10" }
        ];
        // Use road_id as seed for consistent simulation (optional, or just random)
        return statuses[Math.floor(Math.random() * statuses.length)];
    };

    const status = selectedData ? getStatus() : null;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Controls & Details */}
            <div className="space-y-6">
                <Card className="bg-card/40 backdrop-blur-sm border-border/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Navigation className="w-5 h-5 text-primary" />
                            Traffic Navigator
                        </CardTitle>
                        <CardDescription>Select a road segment to analyze traffic conditions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {loading && <p className="text-sm text-muted-foreground">Loading segments...</p>}
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">1. Select Road Segment</label>
                            <select
                                className="w-full p-2.5 rounded-md bg-background border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                value={selectedSegment}
                                onChange={(e) => handleSegmentChange(e.target.value)}
                                disabled={loading || !!error}
                            >
                                <option value="">Select a segment...</option>
                                {allSegments.map(segment => (
                                    <option key={segment} value={segment}>{segment}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">2. Confirmed Road Path</label>
                            <select
                                className="w-full p-2.5 rounded-md bg-background border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                value={selectedRoad}
                                onChange={(e) => setSelectedRoad(e.target.value)}
                                disabled={!selectedSegment || loading || !!error}
                            >
                                <option value="">Select a road...</option>
                                {filteredRoads.map(road => (
                                    <option key={road} value={road}>{road}</option>
                                ))}
                            </select>
                        </div>
                    </CardContent>
                </Card>

                {selectedData && status && (
                    <Card className="bg-card/40 backdrop-blur-sm border-border/50 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Activity className="w-24 h-24" />
                        </div>
                        <CardContent className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-bold">{selectedData.road_name}</h3>
                                    <p className="text-sm text-muted-foreground">{selectedData.segment_name}</p>
                                </div>
                                <Badge variant="outline" className={`${status.bg} ${status.color} border-current`}>
                                    {status.label}
                                </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="p-3 bg-secondary/20 rounded-lg">
                                    <p className="text-xs text-muted-foreground">Road Class</p>
                                    <p className="font-mono font-bold capitalize">{selectedData.road_class}</p>
                                </div>
                                <div className="p-3 bg-secondary/20 rounded-lg">
                                    <p className="text-xs text-muted-foreground">ID</p>
                                    <p className="font-mono text-primary">{selectedData.road_id}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <MapPin className="w-3 h-3" />
                                Coordinates: {selectedData.lat}, {selectedData.lon}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {selectedData && (
                    <Card className="bg-card/40 backdrop-blur-sm border-border/50">
                        <CardHeader>
                            <CardTitle className="text-base">Forecast</CardTitle>
                            <CardDescription>Predicted congestion for {selectedData.road_id}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {forecastError && <p className="text-sm text-red-500 mb-2">{forecastError}</p>}
                            {forecastLoading && <p className="text-sm text-muted-foreground mb-2">Loading forecast…</p>}
                            {!forecastLoading && chartData.length === 0 && (
                                <p className="text-sm text-muted-foreground">No forecast available.</p>
                            )}
                            {chartData.length > 0 && (
                                <div className="w-full h-[280px]">
                                    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                                        <LineChart data={chartData} margin={{ top: 16, right: 16, bottom: 8, left: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} vertical={false} />
                                            <XAxis dataKey="label" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} dy={6} />
                                            <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                                            <Tooltip
                                                contentStyle={{ background: "var(--popover)", border: `1px solid var(--border)`, color: "var(--popover-foreground)" }}
                                                labelStyle={{ color: "var(--muted-foreground)" }}
                                                formatter={(v) => [`${v.toFixed?.(1) ?? v}%`, "Congestion"]}
                                            />
                                            <Line type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={2} dot={{ r: 3, fill: "var(--primary)" }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Map View */}
            <div className="min-h-[400px] h-full rounded-xl overflow-hidden border border-border/50 relative">
                <LeafletMap
                    center={selectedData ? [selectedData.lat, selectedData.lon] : [19.0760, 72.8777]}
                    zoom={selectedData ? 15 : 12}
                    markers={selectedData ? [{
                        id: selectedData.road_id,
                        lat: selectedData.lat,
                        lng: selectedData.lon,
                        popupContent: (
                            <div className="p-2 min-w-[150px]">
                                <h4 className="font-bold mb-1">{selectedData.segment_name}</h4>
                                <p className="text-sm text-gray-600 font-mono">{selectedData.road_id}</p>
                            </div>
                        )
                    }] : undefined}
                />
            </div>
        </div>
    );
}
