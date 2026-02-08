(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeafletMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/server.browser.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Minimal neon dot icon
function buildDotIcon(color = "#22d3ee") {
    const html = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$server$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].renderToString(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                backgroundColor: color,
                boxShadow: `0 0 8px ${color}`
            },
            className: "inline-flex h-3 w-3 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, this));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        html,
        className: "custom-div-icon",
        iconSize: [
            16,
            16
        ],
        iconAnchor: [
            8,
            8
        ],
        popupAnchor: [
            0,
            -6
        ]
    });
}
// Styled popup content
function PopupCard({ title, congestion, band, speed }) {
    const color = congestion >= 80 ? "text-red-400" : congestion >= 60 ? "text-amber-400" : "text-emerald-400";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-[200px] rounded-xl border border-white/10 bg-background/80 backdrop-blur-md px-3 py-2 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-foreground",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-sm font-semibold ${color}`,
                children: [
                    "Congestion: ",
                    Math.round(congestion),
                    "%",
                    band ? ` (${band})` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            speed != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-mono text-muted-foreground",
                children: [
                    "Speed: ",
                    speed.toFixed?.(1) ?? speed,
                    " km/h"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                lineNumber: 36,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_c = PopupCard;
function LeafletMap({ center = [
    19.0760,
    72.8777
], zoom = 12, markers = [], onMarkerClick, tileTheme = "dark" }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rawId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const mapDomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeafletMap.useMemo[mapDomId]": ()=>`leaflet-${rawId}`
    }["LeafletMap.useMemo[mapDomId]"], [
        rawId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeafletMap.useEffect": ()=>{
            setMounted(true);
            return ({
                "LeafletMap.useEffect": ()=>{
                    const container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].DomUtil.get(mapDomId);
                    if (container && container._leaflet_id) {
                        container._leaflet_id = null;
                    }
                }
            })["LeafletMap.useEffect"];
        }
    }["LeafletMap.useEffect"], [
        mapDomId
    ]);
    const cleanMarkers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeafletMap.useMemo[cleanMarkers]": ()=>(markers || []).filter({
                "LeafletMap.useMemo[cleanMarkers]": (m)=>m?.lat != null && m?.lng != null
            }["LeafletMap.useMemo[cleanMarkers]"])
    }["LeafletMap.useMemo[cleanMarkers]"], [
        markers
    ]);
    const hasMarkers = cleanMarkers.length > 0;
    const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeafletMap.useMemo[bounds]": ()=>{
            if (!hasMarkers) return null;
            const latlngs = cleanMarkers.map({
                "LeafletMap.useMemo[bounds].latlngs": (m)=>[
                        m.lat,
                        m.lng
                    ]
            }["LeafletMap.useMemo[bounds].latlngs"]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(latlngs);
        }
    }["LeafletMap.useMemo[bounds]"], [
        cleanMarkers,
        hasMarkers
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full min-h-[500px] relative z-0 rounded-xl overflow-hidden border border-border/50",
        children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
            id: mapDomId,
            center: center,
            zoom: zoom,
            style: {
                height: "100%",
                width: "100%"
            },
            className: "z-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    url: tileTheme === "light" ? "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                    className: "map-tiles"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                    lineNumber: 79,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapController, {
                    center: center,
                    zoom: zoom,
                    bounds: bounds
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                    lineNumber: 87,
                    columnNumber: 21
                }, this),
                cleanMarkers.map((marker)=>{
                    const icon = buildDotIcon(marker.color || "#22d3ee");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                        position: [
                            marker.lat,
                            marker.lng
                        ],
                        icon: icon,
                        eventHandlers: onMarkerClick ? {
                            click: ()=>onMarkerClick(marker.linkedId || marker.id)
                        } : undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                            children: marker.popupContent ? marker.popupContent : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopupCard, {
                                title: marker.title || marker.road_name || marker.road_id,
                                congestion: marker.congestion ?? 0,
                                band: marker.band,
                                speed: marker.speed
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                                lineNumber: 104,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                            lineNumber: 102,
                            columnNumber: 33
                        }, this)
                    }, marker.id, false, {
                        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                        lineNumber: 92,
                        columnNumber: 29
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
            lineNumber: 72,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full min-h-[500px] rounded-xl bg-muted/40"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
            lineNumber: 117,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_s(LeafletMap, "LJRg//yfC2zhFL1R/7Zss3fWRMo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = LeafletMap;
// Component to handle map interactions or updates
function MapController({ center, zoom, bounds }) {
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapController.useEffect": ()=>{
            map.invalidateSize();
        }
    }["MapController.useEffect"], [
        map
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapController.useEffect": ()=>{
            if (bounds) {
                map.fitBounds(bounds, {
                    padding: [
                        24,
                        24
                    ]
                });
            } else {
                map.setView(center, zoom, {
                    animate: true
                });
            }
        }
    }["MapController.useEffect"], [
        map,
        center,
        zoom,
        bounds
    ]);
    return null;
}
_s1(MapController, "tm7v5wxt+lXe+JHmDCjcGD98tIQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c2 = MapController;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PopupCard");
__turbopack_context__.k.register(_c1, "LeafletMap");
__turbopack_context__.k.register(_c2, "MapController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_dashboard_LeafletMap_jsx_5a4e5c74._.js.map