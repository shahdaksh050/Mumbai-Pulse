"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Zap, Layers, Navigation, Search, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchSegments, searchPredictions } from "@/lib/api";

function severityMeta(congestionPct) {
    if (congestionPct >= 80) return { color: "text-red-500", glow: "bg-red-500/20", iconColor: "border-red-500", label: "Critical" };
    if (congestionPct >= 60) return { color: "text-orange-500", glow: "bg-orange-500/20", iconColor: "border-orange-500", label: "Heavy" };
    return { color: "text-yellow-500", glow: "bg-yellow-500/20", iconColor: "border-yellow-500", label: "Moderate" };
}

function normalizePosition(lat, lon, bounds) {
    if (!bounds) return { top: "50%", left: "50%" };
    const { minLat, maxLat, minLon, maxLon } = bounds;
    const latRange = Math.max(maxLat - minLat, 0.0001);
    const lonRange = Math.max(maxLon - minLon, 0.0001);
    return {
        top: `${((maxLat - lat) / latRange) * 100}%`,
        left: `${((lon - minLon) / lonRange) * 100}%`,
    };
}

const REFRESH_MS = 5 * 60 * 1000;

export function TrafficMap() {
    const [activeLayer, setActiveLayer] = useState("live");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [hotspots, setHotspots] = useState([]);
    const [segments, setSegments] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        const load = async () => {
            setLoading(true);
            try {
                const [segData, hotspotData] = await Promise.all([
                    fetchSegments(),
                    searchPredictions({ min_congestion: 50, limit: 200 })
                ]);
                if (!mounted) return;
                setSegments(segData || []);
                const merged = (hotspotData || []).map((h) => {
                    const match = segData?.find((s) => s.road_id === h.road_id);
                    return {
                        ...h,
                        lat: match?.lat,
                        lon: match?.lon,
                        road_class: match?.road_class,
                    };
                }).filter((h) => h.lat != null && h.lon != null);
                setHotspots(merged);
                setError("");
            } catch (err) {
                if (mounted) setError(err.message || "Failed to load map data");
            } finally {
                if (mounted) setLoading(false);
            }
        };

        load();
        const id = setInterval(load, REFRESH_MS);
        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, []);

    const bounds = useMemo(() => {
        if (!hotspots.length) return null;
        const lats = hotspots.map((h) => h.lat).filter((v) => v != null);
        const lons = hotspots.map((h) => h.lon).filter((v) => v != null);
        return {
            minLat: Math.min(...lats),
            maxLat: Math.max(...lats),
            minLon: Math.min(...lons),
            maxLon: Math.max(...lons),
        };
    }, [hotspots]);

    const filteredHotspots = useMemo(() => {
        const bySearch = hotspots.filter((h) => {
            if (!searchQuery) return true;
            const hay = `${h.road_name || ""} ${h.segment_name || ""} ${h.road_id || ""}`.toLowerCase();
            return hay.includes(searchQuery.toLowerCase());
        });
        if (activeLayer === "accidents") return bySearch.filter((h) => (h.congestion_pct || 0) >= 80);
        if (activeLayer === "heatmap") return bySearch.filter((h) => (h.congestion_pct || 0) >= 60);
        return bySearch;
    }, [hotspots, searchQuery, activeLayer]);

    const handleSearch = (e) => {
        e.preventDefault();
        setIsSearching(true);
        // Simulate API call
        setTimeout(() => setIsSearching(false), 1000);
    };

    return (
        <div className="relative w-full h-[600px] bg-slate-950 rounded-xl border border-border overflow-hidden group">
            {/* Grid Pattern Background to simulate map */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Search Bar */}
            <div className="absolute top-6 left-6 z-20 w-80">
                <form onSubmit={handleSearch} className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-background/80 backdrop-blur-md border border-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all shadow-lg"
                    />
                    {isSearching && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                    )}
                </form>
            </div>

            {/* Simulated Map Content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                {/* Hotspot markers */}
                <AnimatePresence>
                    {filteredHotspots.map((spot) => {
                        const meta = severityMeta(spot.congestion_pct || 0);
                        const pos = normalizePosition(spot.lat, spot.lon, bounds);
                        return (
                            <motion.div
                                key={`${spot.road_id}-${spot.timestamp}`}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="absolute pointer-events-auto cursor-pointer"
                                style={{ top: pos.top, left: pos.left }}
                            >
                                <div className="relative group/marker">
                                    <div className={cn("absolute -inset-3 rounded-full animate-ping", meta.glow)} />
                                    <div className={cn("relative bg-background p-1.5 rounded-full border shadow-lg", meta.iconColor, meta.color)}>
                                        <AlertCircle className="w-4 h-4" />
                                    </div>
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded border border-border whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-opacity">
                                        {spot.segment_name || spot.road_name || spot.road_id} · {Math.round(spot.congestion_pct || 0)}% ({meta.label})
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                <div className="text-center space-y-4">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full animate-pulse" />
                        <Map className="w-16 h-16 text-primary relative z-10 mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Live Traffic Feed
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-md">
                        Hotspots updated from the backend prediction region.
                        <br />
                        <span className="text-xs opacity-50">(Spatial layout simulated; swap with Mapbox/Leaflet when ready)</span>
                    </p>
                </div>
            </div>

            {/* Floating Controls */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
                <MapControl icon={<Zap className="w-4 h-4" />} label="Live" active={activeLayer === "live"} onClick={() => setActiveLayer("live")} />
                <MapControl icon={<Layers className="w-4 h-4" />} label="Heatmap" active={activeLayer === "heatmap"} onClick={() => setActiveLayer("heatmap")} />
                <MapControl icon={<Navigation className="w-4 h-4" />} label="Routes" active={activeLayer === "routes"} onClick={() => setActiveLayer("routes")} />
                <MapControl icon={<AlertCircle className="w-4 h-4" />} label="Accidents" active={activeLayer === "accidents"} onClick={() => setActiveLayer("accidents")} />
            </div>

            {/* Status Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-background/80 backdrop-blur-md border-t border-border flex items-center px-4 text-xs font-mono text-muted-foreground z-20">
                <div className="flex gap-4">
                    <span>Markers: {filteredHotspots.length}</span>
                    <span className="text-emerald-500">● LIVE</span>
                    {error && <span className="text-red-500">{error}</span>}
                    {loading && <span>Loading…</span>}
                </div>
                <div className="ml-auto">
                    UPDATED: {new Date().toLocaleTimeString()}
                </div>
            </div>

            {/* Decorative corners */}
            <Corner className="top-0 left-0 border-t border-l rounded-tl-xl" />
            <Corner className="top-0 right-0 border-t border-r rounded-tr-xl" />
            <Corner className="bottom-0 left-0 border-b border-l rounded-bl-xl" />
            <Corner className="bottom-0 right-0 border-b border-r rounded-br-xl" />
        </div>
    );
}

function MapControl({ icon, active, onClick, label }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "p-2 rounded-lg backdrop-blur-md border transition-all duration-200 flex items-center gap-2 pr-4 group/btn",
                active
                    ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                    : "bg-card/40 border-border text-muted-foreground hover:bg-card/60 hover:text-white"
            )}
        >
            {icon}
            <span className={cn("text-xs font-medium transition-all duration-300 w-0 overflow-hidden opacity-0 group-hover/btn:w-auto group-hover/btn:opacity-100", active && "w-auto opacity-100")}>
                {label}
            </span>
        </button>
    );
}

function Corner({ className }) {
    return (
        <div className={cn("absolute w-4 h-4 border-primary/50", className)} />
    );
}
