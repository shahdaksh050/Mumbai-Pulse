"use client";

import { useEffect, useMemo, useState, useId } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
// Minimal neon dot icon
function buildDotIcon(color = "#22d3ee") {
    const html = ReactDOMServer.renderToString(
        <div className="relative flex items-center justify-center">
            <span
                style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
                className="inline-flex h-3 w-3 rounded-full"
            />
        </div>
    );

    return L.divIcon({
        html,
        className: "custom-div-icon",
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        popupAnchor: [0, -6],
    });
}

// Styled popup content
function PopupCard({ title, congestion, band, speed }) {
    const color = congestion >= 80 ? "text-red-400" : congestion >= 60 ? "text-amber-400" : "text-emerald-400";
    return (
        <div className="min-w-[200px] rounded-xl border border-white/10 bg-background/80 backdrop-blur-md px-3 py-2 shadow-xl">
            <p className="font-semibold text-foreground">{title}</p>
            <p className={`text-sm font-semibold ${color}`}>Congestion: {Math.round(congestion)}%{band ? ` (${band})` : ""}</p>
            {speed != null && (
                <p className="text-xs font-mono text-muted-foreground">Speed: {speed.toFixed?.(1) ?? speed} km/h</p>
            )}
        </div>
    );
}

export default function LeafletMap({ center = [19.0760, 72.8777], zoom = 12, markers = [], onMarkerClick, tileTheme = "dark" }) {
    const [mounted, setMounted] = useState(false);
    const rawId = useId();
    const mapDomId = useMemo(() => `leaflet-${rawId}`, [rawId]);

    useEffect(() => {
        setMounted(true);
        return () => {
            const container = L.DomUtil.get(mapDomId);
            if (container && container._leaflet_id) {
                container._leaflet_id = null;
            }
        };
    }, [mapDomId]);

    const cleanMarkers = useMemo(
        () => (markers || []).filter((m) => m?.lat != null && m?.lng != null),
        [markers]
    );
    const hasMarkers = cleanMarkers.length > 0;

    const bounds = useMemo(() => {
        if (!hasMarkers) return null;
        const latlngs = cleanMarkers.map(m => [m.lat, m.lng]);
        return L.latLngBounds(latlngs);
    }, [cleanMarkers, hasMarkers]);

    return (
        <div className="w-full h-full min-h-[500px] relative z-0 rounded-xl overflow-hidden border border-border/50">
            {mounted ? (
                <MapContainer
                    id={mapDomId}
                    center={center}
                    zoom={zoom}
                    style={{ height: "100%", width: "100%" }}
                    className="z-0"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url={tileTheme === "light"
                            ? "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                            : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"}
                        className="map-tiles"
                    />

                    <MapController center={center} zoom={zoom} bounds={bounds} />

                    {cleanMarkers.map((marker) => {
                        const icon = buildDotIcon(marker.color || "#22d3ee");
                        return (
                            <Marker
                                key={marker.id}
                                position={[marker.lat, marker.lng]}
                                icon={icon}
                                eventHandlers={
                                    onMarkerClick
                                        ? { click: () => onMarkerClick(marker.linkedId || marker.id) }
                                        : undefined
                                }
                            >
                                <Popup>
                                    {marker.popupContent ? marker.popupContent : (
                                        <PopupCard
                                            title={marker.title || marker.road_name || marker.road_id}
                                            congestion={marker.congestion ?? 0}
                                            band={marker.band}
                                            speed={marker.speed}
                                        />
                                    )}
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            ) : (
                <div className="w-full h-full min-h-[500px] rounded-xl bg-muted/40" />
            )}
        </div>
    );
}

// Component to handle map interactions or updates
function MapController({ center, zoom, bounds }) {
    const map = useMap();

    useEffect(() => {
        map.invalidateSize();
    }, [map]);

    useEffect(() => {
        if (bounds) {
            map.fitBounds(bounds, { padding: [24, 24] });
        } else {
            map.setView(center, zoom, { animate: true });
        }
    }, [map, center, zoom, bounds]);

    return null;
}
