"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Zap, Layers, Navigation, Search, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchSegments, searchPredictions } from "@/lib/api";

// Static catalog of all unique road segments (fallback/union with API data)
const ALL_SEGMENTS = [
    { "road_id": "AIR_1", "road_name": "Airport Approach Road", "segment_name": "Terminal 2 (Sahar)", "lat": 19.0896, "lon": 72.8656, "road_class": "arterial", "readings": 17544 },
    { "road_id": "AIR_2", "road_name": "Airport Approach Road", "segment_name": "Terminal 1 (Santacruz)", "lat": 19.0945, "lon": 72.853, "road_class": "arterial", "readings": 17544 },
    { "road_id": "AKR_1", "road_name": "Andheri-Kurla Road", "segment_name": "Saki Naka", "lat": 19.089, "lon": 72.8884, "road_class": "arterial", "readings": 17544 },
    { "road_id": "AKR_2", "road_name": "Andheri-Kurla Road", "segment_name": "Marol", "lat": 19.1083, "lon": 72.8856, "road_class": "arterial", "readings": 17544 },
    { "road_id": "AKR_3", "road_name": "Andheri-Kurla Road", "segment_name": "Chakala", "lat": 19.1105, "lon": 72.8628, "road_class": "arterial", "readings": 17544 },
    { "road_id": "AKR_4", "road_name": "Andheri-Kurla Road", "segment_name": "Kurla West", "lat": 19.073, "lon": 72.8795, "road_class": "arterial", "readings": 17544 },
    { "road_id": "WOR_1", "road_name": "Annie Besant Road", "segment_name": "Worli Naka", "lat": 19.0097, "lon": 72.8175, "road_class": "arterial", "readings": 17544 },
    { "road_id": "WOR_2", "road_name": "Annie Besant Road", "segment_name": "Prabhadevi", "lat": 19.0144, "lon": 72.8258, "road_class": "arterial", "readings": 17544 },
    { "road_id": "BKC_3", "road_name": "BKC Connector", "segment_name": "BKC Near US Consulate", "lat": 19.066, "lon": 72.8635, "road_class": "arterial", "readings": 17544 },
    { "road_id": "BKC_2", "road_name": "BKC Connector", "segment_name": "BKC Central", "lat": 19.0672, "lon": 72.8664, "road_class": "arterial", "readings": 17544 },
    { "road_id": "BKC_1", "road_name": "BKC Connector", "segment_name": "Bandra East Entry", "lat": 19.0607, "lon": 72.8691, "road_class": "arterial", "readings": 17544 },
    { "road_id": "BKC_4", "road_name": "BKC Connector", "segment_name": "BKC - MMRDA Grounds", "lat": 19.0688, "lon": 72.862, "road_class": "arterial", "readings": 17544 },
    { "road_id": "BWSL_2", "road_name": "Bandra-Worli Sea Link Approach", "segment_name": "Worli End", "lat": 19.0167, "lon": 72.8162, "road_class": "highway", "readings": 17544 },
    { "road_id": "BWSL_1", "road_name": "Bandra-Worli Sea Link Approach", "segment_name": "Bandra Reclamation", "lat": 19.0353, "lon": 72.8166, "road_class": "highway", "readings": 17544 },
    { "road_id": "CAR_1", "road_name": "Carter Road", "segment_name": "Bandra West", "lat": 19.06, "lon": 72.8192, "road_class": "arterial", "readings": 17544 },
    { "road_id": "CHE_1", "road_name": "Chembur Junction Approaches", "segment_name": "Amar Mahal Junction", "lat": 19.0642, "lon": 72.8936, "road_class": "local", "readings": 17544 },
    { "road_id": "DHA_1", "road_name": "Dharavi Main Road", "segment_name": "Dharavi Junction", "lat": 19.0431, "lon": 72.853, "road_class": "arterial", "readings": 17544 },
    { "road_id": "EMR_1", "road_name": "Dr. E Moses Road", "segment_name": "Mahalaxmi", "lat": 18.9838, "lon": 72.8039, "road_class": "arterial", "readings": 17544 },
    { "road_id": "EEH_4", "road_name": "Eastern Express Highway", "segment_name": "Bhandup", "lat": 19.1438, "lon": 72.943, "road_class": "highway", "readings": 17544 },
    { "road_id": "EEH_5", "road_name": "Eastern Express Highway", "segment_name": "Vikhroli", "lat": 19.1119, "lon": 72.9341, "road_class": "highway", "readings": 17544 },
    { "road_id": "EEH_6", "road_name": "Eastern Express Highway", "segment_name": "Kurla", "lat": 19.0734, "lon": 72.8847, "road_class": "highway", "readings": 17544 },
    { "road_id": "EEH_7", "road_name": "Eastern Express Highway", "segment_name": "Chembur Naka", "lat": 19.0564, "lon": 72.889, "road_class": "highway", "readings": 17544 },
    { "road_id": "EEH_2", "road_name": "Eastern Express Highway", "segment_name": "Ghatkopar", "lat": 19.0867, "lon": 72.9073, "road_class": "highway", "readings": 17544 },
    { "road_id": "EEH_1", "road_name": "Eastern Express Highway", "segment_name": "Mulund", "lat": 19.1736, "lon": 72.957, "road_class": "highway", "readings": 17544 },
    { "road_id": "EEH_3", "road_name": "Eastern Express Highway", "segment_name": "Sion", "lat": 19.0455, "lon": 72.8632, "road_class": "highway", "readings": 17544 },
    { "road_id": "GMLR_1", "road_name": "Ghatkopar-Mankhurd Link Road", "segment_name": "Ghatkopar Link Start", "lat": 19.0891, "lon": 72.9152, "road_class": "arterial", "readings": 17544 },
    { "road_id": "GMLR_2", "road_name": "Ghatkopar-Mankhurd Link Road", "segment_name": "Mankhurd End", "lat": 19.0468, "lon": 72.9396, "road_class": "arterial", "readings": 17544 },
    { "road_id": "JVLR_1", "road_name": "JVLR", "segment_name": "WEH Junction", "lat": 19.1316, "lon": 72.8464, "road_class": "local", "readings": 17544 },
    { "road_id": "JVLR_3", "road_name": "JVLR", "segment_name": "IIT Powai", "lat": 19.1325, "lon": 72.915, "road_class": "local", "readings": 17544 },
    { "road_id": "JVLR_4", "road_name": "JVLR", "segment_name": "Kanjurmarg Link", "lat": 19.1246, "lon": 72.9287, "road_class": "local", "readings": 17544 },
    { "road_id": "JVLR_2", "road_name": "JVLR", "segment_name": "Powai", "lat": 19.1194, "lon": 72.9055, "road_class": "local", "readings": 17544 },
    { "road_id": "JTR_1", "road_name": "Juhu Tara Road", "segment_name": "Juhu", "lat": 19.0979, "lon": 72.8261, "road_class": "arterial", "readings": 17544 },
    { "road_id": "LBS_1", "road_name": "LBS Marg", "segment_name": "Mulund West", "lat": 19.1725, "lon": 72.9457, "road_class": "arterial", "readings": 17544 },
    { "road_id": "LBS_2", "road_name": "LBS Marg", "segment_name": "Vikhroli West", "lat": 19.1075, "lon": 72.9289, "road_class": "arterial", "readings": 17544 },
    { "road_id": "LBS_3", "road_name": "LBS Marg", "segment_name": "Bhandup West", "lat": 19.1432, "lon": 72.9353, "road_class": "arterial", "readings": 17544 },
    { "road_id": "LBS_4", "road_name": "LBS Marg", "segment_name": "Kanjurmarg", "lat": 19.1307, "lon": 72.9343, "road_class": "arterial", "readings": 17544 },
    { "road_id": "LBS_5", "road_name": "LBS Marg", "segment_name": "Ghatkopar West", "lat": 19.086, "lon": 72.909, "road_class": "arterial", "readings": 17544 },
    { "road_id": "LNK_3", "road_name": "Linking Road", "segment_name": "Santacruz", "lat": 19.0808, "lon": 72.8324, "road_class": "arterial", "readings": 17544 },
    { "road_id": "LNK_1", "road_name": "Linking Road", "segment_name": "Bandra", "lat": 19.0604, "lon": 72.8352, "road_class": "arterial", "readings": 17544 },
    { "road_id": "LNK_2", "road_name": "Linking Road", "segment_name": "Khar", "lat": 19.0718, "lon": 72.833, "road_class": "arterial", "readings": 17544 },
    { "road_id": "MAH_1", "road_name": "Mahim Junction Approaches", "segment_name": "Mahim Causeway", "lat": 19.0402, "lon": 72.84, "road_class": "local", "readings": 17544 },
    { "road_id": "MAR_1", "road_name": "Marine Drive", "segment_name": "Churchgate", "lat": 18.9335, "lon": 72.8257, "road_class": "local", "readings": 17544 },
    { "road_id": "MAR_2", "road_name": "Marine Drive", "segment_name": "Nariman Point", "lat": 18.9256, "lon": 72.8232, "road_class": "local", "readings": 17544 },
    { "road_id": "NMJ_1", "road_name": "N. M. Joshi Marg", "segment_name": "Byculla", "lat": 18.9769, "lon": 72.8326, "road_class": "arterial", "readings": 17544 },
    { "road_id": "PDR_1", "road_name": "P. D'Mello Road", "segment_name": "CST / Masjid Bunder", "lat": 18.9508, "lon": 72.838, "road_class": "arterial", "readings": 17544 },
    { "road_id": "PED_1", "road_name": "Peddar Road", "segment_name": "Kemps Corner", "lat": 18.9647, "lon": 72.8075, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SVR_5", "road_name": "S V Road", "segment_name": "Andheri", "lat": 19.119, "lon": 72.846, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SVR_8", "road_name": "S V Road", "segment_name": "Borivali", "lat": 19.23, "lon": 72.8565, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SVR_7", "road_name": "S V Road", "segment_name": "Malad", "lat": 19.1861, "lon": 72.8488, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SVR_6", "road_name": "S V Road", "segment_name": "Goregaon", "lat": 19.1663, "lon": 72.8499, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SVR_4", "road_name": "S V Road", "segment_name": "Vile Parle", "lat": 19.0996, "lon": 72.8426, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SVR_3", "road_name": "S V Road", "segment_name": "Santacruz", "lat": 19.0798, "lon": 72.8332, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SVR_1", "road_name": "S V Road", "segment_name": "Bandra", "lat": 19.0548, "lon": 72.8407, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SVR_2", "road_name": "S V Road", "segment_name": "Khar", "lat": 19.0702, "lon": 72.8337, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SCLR_3", "road_name": "SCLR", "segment_name": "CST Road / Kurla", "lat": 19.0775, "lon": 72.8818, "road_class": "local", "readings": 17544 },
    { "road_id": "SCLR_2", "road_name": "SCLR", "segment_name": "Chembur Exit", "lat": 19.0616, "lon": 72.8971, "road_class": "local", "readings": 17544 },
    { "road_id": "SCLR_1", "road_name": "SCLR", "segment_name": "Santacruz East", "lat": 19.0794, "lon": 72.8563, "road_class": "local", "readings": 17544 },
    { "road_id": "SAH_1", "road_name": "Sahar Elevated Road", "segment_name": "Sahar Elevated Entry", "lat": 19.1072, "lon": 72.8622, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SAH_2", "road_name": "Sahar Elevated Road", "segment_name": "Andheri East Exit", "lat": 19.1157, "lon": 72.8592, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SBM_2", "road_name": "Senapati Bapat Marg", "segment_name": "Lower Parel", "lat": 18.9982, "lon": 72.8291, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SBM_1", "road_name": "Senapati Bapat Marg", "segment_name": "Dadar West", "lat": 19.0209, "lon": 72.842, "road_class": "arterial", "readings": 17544 },
    { "road_id": "SIO_1", "road_name": "Sion Junction Approaches", "segment_name": "Sion Circle", "lat": 19.0408, "lon": 72.8629, "road_class": "local", "readings": 17544 },
    { "road_id": "SPH_2", "road_name": "Sion-Panvel Highway", "segment_name": "Mankhurd", "lat": 19.0509, "lon": 72.9296, "road_class": "highway", "readings": 17544 },
    { "road_id": "SPH_4", "road_name": "Sion-Panvel Highway", "segment_name": "Govandi", "lat": 19.0475, "lon": 72.916, "road_class": "highway", "readings": 17544 },
    { "road_id": "SPH_1", "road_name": "Sion-Panvel Highway", "segment_name": "Chembur", "lat": 19.0623, "lon": 72.8974, "road_class": "highway", "readings": 17544 },
    { "road_id": "TAR_1", "road_name": "Tardeo Road", "segment_name": "Tardeo", "lat": 18.9729, "lon": 72.809, "road_class": "arterial", "readings": 17544 },
    { "road_id": "WEH_10", "road_name": "Western Express Highway", "segment_name": "Santacruz East", "lat": 19.0816, "lon": 72.8487, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_2", "road_name": "Western Express Highway", "segment_name": "Goregaon East", "lat": 19.1633, "lon": 72.8497, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_3", "road_name": "Western Express Highway", "segment_name": "Andheri East", "lat": 19.1197, "lon": 72.8468, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_4", "road_name": "Western Express Highway", "segment_name": "Bandra East", "lat": 19.0556, "lon": 72.8426, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_5", "road_name": "Western Express Highway", "segment_name": "Borivali East", "lat": 19.228, "lon": 72.8546, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_6", "road_name": "Western Express Highway", "segment_name": "Kandivali East", "lat": 19.2045, "lon": 72.8571, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_7", "road_name": "Western Express Highway", "segment_name": "Malad East", "lat": 19.1871, "lon": 72.8486, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_8", "road_name": "Western Express Highway", "segment_name": "Jogeshwari East", "lat": 19.1351, "lon": 72.854, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_9", "road_name": "Western Express Highway", "segment_name": "Vile Parle East", "lat": 19.0991, "lon": 72.8527, "road_class": "highway", "readings": 17544 },
    { "road_id": "WEH_1", "road_name": "Western Express Highway", "segment_name": "Dahisar East", "lat": 19.2514, "lon": 72.8653, "road_class": "highway", "readings": 17544 }
];

function mergeSegments(apiSegments) {
    const map = new Map();
    ALL_SEGMENTS.forEach((s) => map.set(s.road_id, s));
    (apiSegments || []).forEach((s) => {
        const base = map.get(s.road_id) || {};
        map.set(s.road_id, { ...base, ...s });
    });
    return Array.from(map.values());
}

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
                const mergedSegments = mergeSegments(segData);
                setSegments(mergedSegments);
                const merged = (hotspotData || []).map((h) => {
                    const match = mergedSegments.find((s) => s.road_id === h.road_id);
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
