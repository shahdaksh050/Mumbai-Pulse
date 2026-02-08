(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mockData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_TRAFFIC_DATA",
    ()=>MOCK_TRAFFIC_DATA
]);
const MOCK_TRAFFIC_DATA = {
    currentCongestion: 0.85,
    forecast: Array.from({
        length: 48
    }, (_, i)=>({
            time: new Date(Date.now() + i * 3600 * 1000).toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true
            }),
            value: Math.floor(Math.random() * (95 - 40) + 40)
        })),
    hotspots: [
        {
            id: 1,
            name: "Bandra-Worli Sea Link",
            status: "Critical",
            speed: 12,
            severity: "critical"
        },
        {
            id: 2,
            name: "Western Express Highway",
            status: "Heavy",
            speed: 25,
            severity: "heavy"
        },
        {
            id: 3,
            name: "Eastern Freeway",
            status: "Moderate",
            speed: 45,
            severity: "moderate"
        },
        {
            id: 4,
            name: "Andheri Flyover",
            status: "Critical",
            speed: 8,
            severity: "critical"
        },
        {
            id: 5,
            name: "Sion Circle",
            status: "Heavy",
            speed: 18,
            severity: "heavy"
        },
        {
            id: 6,
            name: "JVLR Junction",
            status: "Moderate",
            speed: 35,
            severity: "moderate"
        }
    ],
    alerts: [
        {
            id: 1,
            type: "Accident",
            location: "Western Express Highway",
            time: "10 mins ago",
            severity: "critical",
            description: "Multi-vehicle collision near airport exit."
        },
        {
            id: 2,
            type: "Construction",
            location: "Linking Road",
            time: "1 hour ago",
            severity: "moderate",
            description: "Metro work causing lane closure."
        },
        {
            id: 3,
            type: "VVIP Movement",
            location: "BKC Connector",
            time: "30 mins ago",
            severity: "heavy",
            description: "Traffic halted for convoy."
        }
    ],
    accidents: [
        {
            id: 101,
            lat: 19.0760,
            lng: 72.8777,
            type: "Crash",
            severity: "High"
        },
        {
            id: 102,
            lat: 19.0860,
            lng: 72.8877,
            type: "Breakdown",
            severity: "Medium"
        },
        {
            id: 103,
            lat: 19.0660,
            lng: 72.8677,
            type: "Stalled Vehicle",
            severity: "Low"
        }
    ],
    systemStatus: {
        activeSensors: 1240,
        aiModelAccuracy: "94.2%",
        lastUpdated: "Just now"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Fix Leaflet marker icon issue
const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png";
const DefaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [
        25,
        41
    ],
    iconAnchor: [
        12,
        41
    ],
    popupAnchor: [
        1,
        -34
    ],
    tooltipAnchor: [
        16,
        -28
    ],
    shadowSize: [
        41,
        41
    ]
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker.prototype.options.icon = DefaultIcon;
function LeafletMap({ center = [
    19.0760,
    72.8777
], zoom = 12, markers }) {
    // Default to mock accidents if no markers provided (compatibility with previous usage)
    const displayMarkers = markers || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_TRAFFIC_DATA"].accidents.map((a)=>({
            id: a.id,
            lat: a.lat,
            lng: a.lng,
            popupContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-red-600",
                        children: a.type
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "Severity: ",
                            a.severity
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, this)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full min-h-[500px] relative z-0 rounded-xl overflow-hidden border border-border/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
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
                        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                        className: "map-tiles"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapController, {
                        center: center,
                        zoom: zoom
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    displayMarkers.map((marker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: [
                                marker.lat,
                                marker.lng
                            ],
                            children: marker.popupContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                children: marker.popupContent
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                                lineNumber: 62,
                                columnNumber: 49
                            }, this)
                        }, marker.id, false, {
                            fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none bg-indigo-900/10 mix-blend-multiply z-[400]"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/LeafletMap.jsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_c = LeafletMap;
// Component to handle map interactions or updates
function MapController({ center, zoom }) {
    _s();
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
            map.setView(center, zoom, {
                animate: true
            });
        }
    }["MapController.useEffect"], [
        map,
        center,
        zoom
    ]);
    return null;
}
_s(MapController, "tm7v5wxt+lXe+JHmDCjcGD98tIQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c1 = MapController;
var _c, _c1;
__turbopack_context__.k.register(_c, "LeafletMap");
__turbopack_context__.k.register(_c1, "MapController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_d75dd4c7._.js.map