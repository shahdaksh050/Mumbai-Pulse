(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            name: "Home",
            href: "/",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Navbar.jsx",
                lineNumber: 15,
                columnNumber: 42
            }, this)
        },
        {
            name: "Live Map",
            href: "/map",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Navbar.jsx",
                lineNumber: 16,
                columnNumber: 49
            }, this)
        },
        {
            name: "Analytics",
            href: "/analytics",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Navbar.jsx",
                lineNumber: 17,
                columnNumber: 56
            }, this)
        },
        {
            name: "Navigator",
            href: "/navigator",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Navbar.jsx",
                lineNumber: 18,
                columnNumber: 56
            }, this)
        },
        {
            name: "Alerts",
            href: "/alerts",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Navbar.jsx",
                lineNumber: 19,
                columnNumber: 50
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2 font-bold text-xl text-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/Navbar.jsx",
                                            lineNumber: 29,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Navbar.jsx",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500",
                                        children: "Mumbai Pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Navbar.jsx",
                                        lineNumber: 31,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Navbar.jsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Navbar.jsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-10 flex items-baseline space-x-4",
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2", pathname === item.href ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"),
                                        children: [
                                            item.icon,
                                            item.name
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/src/components/ui/Navbar.jsx",
                                        lineNumber: 40,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Navbar.jsx",
                                lineNumber: 38,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Navbar.jsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "-mr-2 flex md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 focus:outline-none",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Navbar.jsx",
                                    lineNumber: 62,
                                    columnNumber: 39
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Navbar.jsx",
                                    lineNumber: 62,
                                    columnNumber: 67
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Navbar.jsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Navbar.jsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Navbar.jsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Navbar.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden bg-background border-b border-border/50 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setIsOpen(false),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2", pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"),
                                children: [
                                    item.icon,
                                    item.name
                                ]
                            }, item.name, true, {
                                fileName: "[project]/src/components/ui/Navbar.jsx",
                                lineNumber: 78,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Navbar.jsx",
                        lineNumber: 76,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Navbar.jsx",
                    lineNumber: 70,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Navbar.jsx",
                lineNumber: 68,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Navbar.jsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(Navbar, "HTtb8vrhys85v/FDU2414Ck6KSQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/staticSegments.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Static list of Mumbai road segments provided by the user; keeps UI independent of the 2-year dataset
__turbopack_context__.s([
    "STATIC_SEGMENTS",
    ()=>STATIC_SEGMENTS
]);
const STATIC_SEGMENTS = [
    {
        "road_id": "AIR_1",
        "road_name": "Airport Approach Road",
        "segment_name": "Terminal 2 (Sahar)",
        "lat": 19.0896,
        "lon": 72.8656,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "AIR_2",
        "road_name": "Airport Approach Road",
        "segment_name": "Terminal 1 (Santacruz)",
        "lat": 19.0945,
        "lon": 72.853,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "AKR_1",
        "road_name": "Andheri-Kurla Road",
        "segment_name": "Saki Naka",
        "lat": 19.089,
        "lon": 72.8884,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "AKR_2",
        "road_name": "Andheri-Kurla Road",
        "segment_name": "Marol",
        "lat": 19.1083,
        "lon": 72.8856,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "AKR_3",
        "road_name": "Andheri-Kurla Road",
        "segment_name": "Chakala",
        "lat": 19.1105,
        "lon": 72.8628,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "AKR_4",
        "road_name": "Andheri-Kurla Road",
        "segment_name": "Kurla West",
        "lat": 19.073,
        "lon": 72.8795,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "WOR_1",
        "road_name": "Annie Besant Road",
        "segment_name": "Worli Naka",
        "lat": 19.0097,
        "lon": 72.8175,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "WOR_2",
        "road_name": "Annie Besant Road",
        "segment_name": "Prabhadevi",
        "lat": 19.0144,
        "lon": 72.8258,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "BKC_3",
        "road_name": "BKC Connector",
        "segment_name": "BKC Near US Consulate",
        "lat": 19.066,
        "lon": 72.8635,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "BKC_2",
        "road_name": "BKC Connector",
        "segment_name": "BKC Central",
        "lat": 19.0672,
        "lon": 72.8664,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "BKC_1",
        "road_name": "BKC Connector",
        "segment_name": "Bandra East Entry",
        "lat": 19.0607,
        "lon": 72.8691,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "BKC_4",
        "road_name": "BKC Connector",
        "segment_name": "BKC - MMRDA Grounds",
        "lat": 19.0688,
        "lon": 72.862,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "BWSL_2",
        "road_name": "Bandra-Worli Sea Link Approach",
        "segment_name": "Worli End",
        "lat": 19.0167,
        "lon": 72.8162,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "BWSL_1",
        "road_name": "Bandra-Worli Sea Link Approach",
        "segment_name": "Bandra Reclamation",
        "lat": 19.0353,
        "lon": 72.8166,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "CAR_1",
        "road_name": "Carter Road",
        "segment_name": "Bandra West",
        "lat": 19.06,
        "lon": 72.8192,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "CHE_1",
        "road_name": "Chembur Junction Approaches",
        "segment_name": "Amar Mahal Junction",
        "lat": 19.0642,
        "lon": 72.8936,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "DHA_1",
        "road_name": "Dharavi Main Road",
        "segment_name": "Dharavi Junction",
        "lat": 19.0431,
        "lon": 72.853,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "EMR_1",
        "road_name": "Dr. E Moses Road",
        "segment_name": "Mahalaxmi",
        "lat": 18.9838,
        "lon": 72.8039,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "EEH_4",
        "road_name": "Eastern Express Highway",
        "segment_name": "Bhandup",
        "lat": 19.1438,
        "lon": 72.943,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "EEH_5",
        "road_name": "Eastern Express Highway",
        "segment_name": "Vikhroli",
        "lat": 19.1119,
        "lon": 72.9341,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "EEH_6",
        "road_name": "Eastern Express Highway",
        "segment_name": "Kurla",
        "lat": 19.0734,
        "lon": 72.8847,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "EEH_7",
        "road_name": "Eastern Express Highway",
        "segment_name": "Chembur Naka",
        "lat": 19.0564,
        "lon": 72.889,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "EEH_2",
        "road_name": "Eastern Express Highway",
        "segment_name": "Ghatkopar",
        "lat": 19.0867,
        "lon": 72.9073,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "EEH_1",
        "road_name": "Eastern Express Highway",
        "segment_name": "Mulund",
        "lat": 19.1736,
        "lon": 72.957,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "EEH_3",
        "road_name": "Eastern Express Highway",
        "segment_name": "Sion",
        "lat": 19.0455,
        "lon": 72.8632,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "GMLR_1",
        "road_name": "Ghatkopar-Mankhurd Link Road",
        "segment_name": "Ghatkopar Link Start",
        "lat": 19.0891,
        "lon": 72.9152,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "GMLR_2",
        "road_name": "Ghatkopar-Mankhurd Link Road",
        "segment_name": "Mankhurd End",
        "lat": 19.0468,
        "lon": 72.9396,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "JVLR_1",
        "road_name": "JVLR",
        "segment_name": "WEH Junction",
        "lat": 19.1316,
        "lon": 72.8464,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "JVLR_3",
        "road_name": "JVLR",
        "segment_name": "IIT Powai",
        "lat": 19.1325,
        "lon": 72.915,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "JVLR_4",
        "road_name": "JVLR",
        "segment_name": "Kanjurmarg Link",
        "lat": 19.1246,
        "lon": 72.9287,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "JVLR_2",
        "road_name": "JVLR",
        "segment_name": "Powai",
        "lat": 19.1194,
        "lon": 72.9055,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "JTR_1",
        "road_name": "Juhu Tara Road",
        "segment_name": "Juhu",
        "lat": 19.0979,
        "lon": 72.8261,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "LBS_1",
        "road_name": "LBS Marg",
        "segment_name": "Mulund West",
        "lat": 19.1725,
        "lon": 72.9457,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "LBS_2",
        "road_name": "LBS Marg",
        "segment_name": "Vikhroli West",
        "lat": 19.1075,
        "lon": 72.9289,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "LBS_3",
        "road_name": "LBS Marg",
        "segment_name": "Bhandup West",
        "lat": 19.1432,
        "lon": 72.9353,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "LBS_4",
        "road_name": "LBS Marg",
        "segment_name": "Kanjurmarg",
        "lat": 19.1307,
        "lon": 72.9343,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "LBS_5",
        "road_name": "LBS Marg",
        "segment_name": "Ghatkopar West",
        "lat": 19.086,
        "lon": 72.909,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "LNK_3",
        "road_name": "Linking Road",
        "segment_name": "Santacruz",
        "lat": 19.0808,
        "lon": 72.8324,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "LNK_1",
        "road_name": "Linking Road",
        "segment_name": "Bandra",
        "lat": 19.0604,
        "lon": 72.8352,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "LNK_2",
        "road_name": "Linking Road",
        "segment_name": "Khar",
        "lat": 19.0718,
        "lon": 72.833,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "MAH_1",
        "road_name": "Mahim Junction Approaches",
        "segment_name": "Mahim Causeway",
        "lat": 19.0402,
        "lon": 72.84,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "MAR_1",
        "road_name": "Marine Drive",
        "segment_name": "Churchgate",
        "lat": 18.9335,
        "lon": 72.8257,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "MAR_2",
        "road_name": "Marine Drive",
        "segment_name": "Nariman Point",
        "lat": 18.9256,
        "lon": 72.8232,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "NMJ_1",
        "road_name": "N. M. Joshi Marg",
        "segment_name": "Byculla",
        "lat": 18.9769,
        "lon": 72.8326,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "PDR_1",
        "road_name": "P. D'Mello Road",
        "segment_name": "CST / Masjid Bunder",
        "lat": 18.9508,
        "lon": 72.838,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "PED_1",
        "road_name": "Peddar Road",
        "segment_name": "Kemps Corner",
        "lat": 18.9647,
        "lon": 72.8075,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SVR_5",
        "road_name": "S V Road",
        "segment_name": "Andheri",
        "lat": 19.119,
        "lon": 72.846,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SVR_8",
        "road_name": "S V Road",
        "segment_name": "Borivali",
        "lat": 19.23,
        "lon": 72.8565,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SVR_7",
        "road_name": "S V Road",
        "segment_name": "Malad",
        "lat": 19.1861,
        "lon": 72.8488,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SVR_6",
        "road_name": "S V Road",
        "segment_name": "Goregaon",
        "lat": 19.1663,
        "lon": 72.8499,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SVR_4",
        "road_name": "S V Road",
        "segment_name": "Vile Parle",
        "lat": 19.0996,
        "lon": 72.8426,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SVR_3",
        "road_name": "S V Road",
        "segment_name": "Santacruz",
        "lat": 19.0798,
        "lon": 72.8332,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SVR_1",
        "road_name": "S V Road",
        "segment_name": "Bandra",
        "lat": 19.0548,
        "lon": 72.8407,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SVR_2",
        "road_name": "S V Road",
        "segment_name": "Khar",
        "lat": 19.0702,
        "lon": 72.8337,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SCLR_3",
        "road_name": "SCLR",
        "segment_name": "CST Road / Kurla",
        "lat": 19.0775,
        "lon": 72.8818,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "SCLR_2",
        "road_name": "SCLR",
        "segment_name": "Chembur Exit",
        "lat": 19.0616,
        "lon": 72.8971,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "SCLR_1",
        "road_name": "SCLR",
        "segment_name": "Santacruz East",
        "lat": 19.0794,
        "lon": 72.8563,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "SAH_1",
        "road_name": "Sahar Elevated Road",
        "segment_name": "Sahar Elevated Entry",
        "lat": 19.1072,
        "lon": 72.8622,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SAH_2",
        "road_name": "Sahar Elevated Road",
        "segment_name": "Andheri East Exit",
        "lat": 19.1157,
        "lon": 72.8592,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SBM_2",
        "road_name": "Senapati Bapat Marg",
        "segment_name": "Lower Parel",
        "lat": 18.9982,
        "lon": 72.8291,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SBM_1",
        "road_name": "Senapati Bapat Marg",
        "segment_name": "Dadar West",
        "lat": 19.0209,
        "lon": 72.842,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "SIO_1",
        "road_name": "Sion Junction Approaches",
        "segment_name": "Sion Circle",
        "lat": 19.0408,
        "lon": 72.8629,
        "road_class": "local",
        "readings": 17544
    },
    {
        "road_id": "SPH_2",
        "road_name": "Sion-Panvel Highway",
        "segment_name": "Mankhurd",
        "lat": 19.0509,
        "lon": 72.9296,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "SPH_4",
        "road_name": "Sion-Panvel Highway",
        "segment_name": "Govandi",
        "lat": 19.0475,
        "lon": 72.916,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "SPH_1",
        "road_name": "Sion-Panvel Highway",
        "segment_name": "Chembur",
        "lat": 19.0623,
        "lon": 72.8974,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "TAR_1",
        "road_name": "Tardeo Road",
        "segment_name": "Tardeo",
        "lat": 18.9729,
        "lon": 72.809,
        "road_class": "arterial",
        "readings": 17544
    },
    {
        "road_id": "WEH_10",
        "road_name": "Western Express Highway",
        "segment_name": "Santacruz East",
        "lat": 19.0816,
        "lon": 72.8487,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_2",
        "road_name": "Western Express Highway",
        "segment_name": "Goregaon East",
        "lat": 19.1633,
        "lon": 72.8497,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_3",
        "road_name": "Western Express Highway",
        "segment_name": "Andheri East",
        "lat": 19.1197,
        "lon": 72.8468,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_4",
        "road_name": "Western Express Highway",
        "segment_name": "Bandra East",
        "lat": 19.0556,
        "lon": 72.8426,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_5",
        "road_name": "Western Express Highway",
        "segment_name": "Borivali East",
        "lat": 19.228,
        "lon": 72.8546,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_6",
        "road_name": "Western Express Highway",
        "segment_name": "Kandivali East",
        "lat": 19.2045,
        "lon": 72.8571,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_7",
        "road_name": "Western Express Highway",
        "segment_name": "Malad East",
        "lat": 19.1871,
        "lon": 72.8486,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_8",
        "road_name": "Western Express Highway",
        "segment_name": "Jogeshwari East",
        "lat": 19.1351,
        "lon": 72.854,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_9",
        "road_name": "Western Express Highway",
        "segment_name": "Vile Parle East",
        "lat": 19.0991,
        "lon": 72.8527,
        "road_class": "highway",
        "readings": 17544
    },
    {
        "road_id": "WEH_1",
        "road_name": "Western Express Highway",
        "segment_name": "Dahisar East",
        "lat": 19.2514,
        "lon": 72.8653,
        "road_class": "highway",
        "readings": 17544
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchDatathonForecast",
    ()=>fetchDatathonForecast,
    "fetchHealth",
    ()=>fetchHealth,
    "fetchSegments",
    ()=>fetchSegments,
    "searchPredictions",
    ()=>searchPredictions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$staticSegments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/staticSegments.js [app-client] (ecmascript)");
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
async function request(path, options = {}) {
    const url = `${API_BASE}${path}`;
    const res = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers || {}
        },
        cache: "no-store"
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`API ${res.status} ${res.statusText}: ${text}`);
    }
    return res.json();
}
async function fetchSegments() {
    // Use the provided static segment list to avoid relying on the 2-year dataset
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$staticSegments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIC_SEGMENTS"];
}
async function fetchDatathonForecast(road_id, timestamp) {
    return request("/api/datathon/forecast", {
        method: "POST",
        body: JSON.stringify({
            road_id,
            timestamp
        })
    });
}
async function fetchHealth() {
    return request("/api/health");
}
async function searchPredictions() {
    // Serve synthetic live readings so frontend works without the 2-year dataset
    const now = Date.now();
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$staticSegments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIC_SEGMENTS"].map((seg, idx)=>{
        const base = 30 + idx * 13 % 50; // spread values without full randomness for stability
        const congestion_pct = Math.min(95, Math.max(10, base + (Math.random() * 25 - 12)));
        const band = congestion_pct >= 80 ? "severe" : congestion_pct >= 60 ? "heavy" : "moderate";
        return {
            road_id: seg.road_id,
            road_name: seg.road_name,
            segment_name: seg.segment_name,
            congestion_pct,
            congestion_band: band,
            speed_kmph: 60 - congestion_pct * 0.4,
            timestamp: new Date(now - Math.random() * 5 * 60 * 1000).toISOString()
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/ForecastingChart.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForecastingChart",
    ()=>ForecastingChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function safeLocalValue(isoString) {
    try {
        const d = new Date(isoString);
        if (isNaN(d.getTime())) return "";
        return d.toISOString().slice(0, 16);
    } catch  {
        return "";
    }
}
function ForecastingChart() {
    _s();
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roadId, setRoadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [timestamp, setTimestamp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ForecastingChart.useState": ()=>new Date().toISOString()
    }["ForecastingChart.useState"]);
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForecastingChart.useEffect": ()=>{
            let mounted = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSegments"])().then({
                "ForecastingChart.useEffect": (data)=>{
                    if (!mounted) return;
                    setSegments(data || []);
                    if (data && data.length && !roadId) {
                        setRoadId(data[0].road_id);
                    }
                }
            }["ForecastingChart.useEffect"]).catch({
                "ForecastingChart.useEffect": (err)=>mounted && setError(err.message)
            }["ForecastingChart.useEffect"]);
            return ({
                "ForecastingChart.useEffect": ()=>{
                    mounted = false;
                }
            })["ForecastingChart.useEffect"];
        }
    }["ForecastingChart.useEffect"], [
        roadId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ForecastingChart.useEffect": ()=>{
            if (!roadId || !timestamp) return;
            let mounted = true;
            setLoading(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDatathonForecast"])(roadId, timestamp).then({
                "ForecastingChart.useEffect": (data)=>{
                    if (mounted) {
                        setForecast(data);
                        setError("");
                    }
                }
            }["ForecastingChart.useEffect"]).catch({
                "ForecastingChart.useEffect": (err)=>mounted && setError(err.message)
            }["ForecastingChart.useEffect"]).finally({
                "ForecastingChart.useEffect": ()=>mounted && setLoading(false)
            }["ForecastingChart.useEffect"]);
            return ({
                "ForecastingChart.useEffect": ()=>{
                    mounted = false;
                }
            })["ForecastingChart.useEffect"];
        }
    }["ForecastingChart.useEffect"], [
        roadId,
        timestamp
    ]);
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ForecastingChart.useMemo[chartData]": ()=>{
            if (!forecast) return [];
            const base = new Date(forecast.timestamp || timestamp);
            const entries = [
                {
                    key: "pred_congestion_plus_1h",
                    hours: 1,
                    band: forecast.pred_congestion_band_plus_1h
                },
                {
                    key: "pred_congestion_plus_2h",
                    hours: 2,
                    band: forecast.pred_congestion_band_plus_2h
                },
                {
                    key: "pred_congestion_plus_6h",
                    hours: 6,
                    band: forecast.pred_congestion_band_plus_6h
                },
                {
                    key: "pred_congestion_plus_24h",
                    hours: 24,
                    band: forecast.pred_congestion_band_plus_24h
                }
            ];
            return entries.map({
                "ForecastingChart.useMemo[chartData]": ({ key, hours, band })=>{
                    const t = new Date(base.getTime() + hours * 60 * 60 * 1000);
                    const value = forecast[key] != null ? forecast[key] * 100 : null;
                    return {
                        label: `+${hours}h`,
                        time: t.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        }),
                        value,
                        band
                    };
                }
            }["ForecastingChart.useMemo[chartData]"]).filter({
                "ForecastingChart.useMemo[chartData]": (d)=>d.value !== null
            }["ForecastingChart.useMemo[chartData]"]);
        }
    }["ForecastingChart.useMemo[chartData]"], [
        forecast,
        timestamp
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-[320px] flex flex-col p-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Traffic Forecast (Datathon model)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Live predictions from backend (+1h, +2h, +6h, +24h)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "p-2 rounded-md bg-background border border-border/60",
                                value: roadId,
                                onChange: (e)=>setRoadId(e.target.value),
                                disabled: !segments.length,
                                children: [
                                    !segments.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Loading roads..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                        lineNumber: 94,
                                        columnNumber: 46
                                    }, this),
                                    segments.map((seg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: seg.road_id,
                                            children: [
                                                seg.road_name,
                                                " (",
                                                seg.road_id,
                                                ")"
                                            ]
                                        }, seg.road_id, true, {
                                            fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "datetime-local",
                                className: "p-2 rounded-md bg-background border border-border/60",
                                value: safeLocalValue(timestamp),
                                onChange: (e)=>{
                                    const val = e.target.value;
                                    if (!val) return;
                                    const dt = new Date(val);
                                    if (!isNaN(dt.getTime())) {
                                        setTimestamp(dt.toISOString());
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-500 mb-2",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                lineNumber: 117,
                columnNumber: 23
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground mb-2",
                children: "Fetching forecast…"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                lineNumber: 118,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full min-h-[260px] min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: 320,
                    minWidth: 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: chartData,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                stroke: "var(--border)",
                                opacity: 0.3,
                                vertical: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "label",
                                stroke: "var(--muted-foreground)",
                                fontSize: 10,
                                tickLine: false,
                                axisLine: false,
                                dy: 10
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                stroke: "var(--muted-foreground)",
                                fontSize: 12,
                                tickLine: false,
                                axisLine: false,
                                tickFormatter: (value)=>`${value?.toFixed?.(0) || value}%`,
                                dx: -10,
                                domain: [
                                    0,
                                    100
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 132,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: "var(--popover)",
                                    borderColor: "var(--border)",
                                    color: "var(--popover-foreground)",
                                    borderRadius: "var(--radius)"
                                },
                                labelStyle: {
                                    color: "var(--muted-foreground)"
                                },
                                formatter: (value, name, props)=>{
                                    const band = props?.payload?.band;
                                    return [
                                        `${value?.toFixed?.(2)}%${band ? ` (${band})` : ""}`,
                                        "Congestion"
                                    ];
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 141,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                type: "monotone",
                                dataKey: "value",
                                stroke: "var(--primary)",
                                strokeWidth: 2,
                                dot: {
                                    r: 4,
                                    fill: "var(--primary)",
                                    strokeWidth: 0
                                },
                                activeDot: {
                                    r: 6,
                                    strokeWidth: 0,
                                    fill: "var(--primary)"
                                },
                                isAnimationActive: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 154,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                        lineNumber: 122,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                lineNumber: 120,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_s(ForecastingChart, "TX92hEBfnVfpQrIXFI4GKTBMFVg=");
_c = ForecastingChart;
var _c;
__turbopack_context__.k.register(_c, "ForecastingChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/HotspotsList.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HotspotsList",
    ()=>HotspotsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function getSeverity(congestionPct) {
    if (congestionPct >= 80) return {
        key: "critical",
        label: "Critical",
        barClass: "bg-red-500/5 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/40",
        pillClass: "bg-red-500/20 text-red-500"
    };
    if (congestionPct >= 60) return {
        key: "heavy",
        label: "Heavy",
        barClass: "bg-orange-500/5 border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/40",
        pillClass: "bg-orange-500/20 text-orange-500"
    };
    return {
        key: "moderate",
        label: "Moderate",
        barClass: "bg-yellow-500/5 border-yellow-500/20 hover:bg-yellow-500/10 hover:border-yellow-500/40",
        pillClass: "bg-yellow-500/20 text-yellow-500"
    };
}
function HotspotsList() {
    _s();
    const [hotspots, setHotspots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HotspotsList.useEffect": ()=>{
            let mounted = true;
            const fetchHotspots = {
                "HotspotsList.useEffect.fetchHotspots": async ()=>{
                    setLoading(true);
                    try {
                        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchPredictions"])({
                            min_congestion: 60,
                            limit: 50
                        });
                        if (!mounted) return;
                        setHotspots(results || []);
                        setError("");
                    } catch (err) {
                        if (mounted) setError(err.message || "Failed to load hotspots");
                    } finally{
                        if (mounted) setLoading(false);
                    }
                }
            }["HotspotsList.useEffect.fetchHotspots"];
            fetchHotspots();
            const id = setInterval(fetchHotspots, 30000);
            return ({
                "HotspotsList.useEffect": ()=>{
                    mounted = false;
                    clearInterval(id);
                }
            })["HotspotsList.useEffect"];
        }
    }["HotspotsList.useEffect"], []);
    const sortedHotspots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HotspotsList.useMemo[sortedHotspots]": ()=>[
                ...hotspots
            ].sort({
                "HotspotsList.useMemo[sortedHotspots]": (a, b)=>(b?.congestion_pct || 0) - (a?.congestion_pct || 0)
            }["HotspotsList.useMemo[sortedHotspots]"])
    }["HotspotsList.useMemo[sortedHotspots]"], [
        hotspots
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col p-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Critical Hotspots"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Areas requiring immediate attention"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "text-orange-500 h-5 w-5 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-500 mb-2",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                lineNumber: 58,
                columnNumber: 23
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground",
                children: "Loading live hotspots…"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                lineNumber: 59,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 overflow-y-auto max-h-[300px] pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent",
                children: [
                    !loading && sortedHotspots.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "No hotspots found for the current filters."
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this),
                    sortedHotspots.map((hotspot)=>{
                        const severity = getSeverity(hotspot.congestion_pct || 0);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer", severity.barClass),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-sm text-foreground group-hover:text-primary transition-colors",
                                            children: hotspot.segment_name || hotspot.road_name || hotspot.road_id
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", severity.pillClass),
                                                    children: severity.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                                    lineNumber: 80,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                                            lineNumber: 84,
                                                            columnNumber: 41
                                                        }, this),
                                                        Math.round(hotspot.congestion_pct || 0),
                                                        "% congestion",
                                                        hotspot.congestion_band ? ` (${hotspot.congestion_band})` : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                            lineNumber: 79,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 w-8 rounded-full bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        className: "h-4 w-4 text-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                        lineNumber: 91,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, `${hotspot.road_id}-${hotspot.timestamp}`, true, {
                            fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                            lineNumber: 68,
                            columnNumber: 25
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/HotspotsList.jsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(HotspotsList, "rcuhNpsXlEH2+0ObtcPMyQyIrzo=");
_c = HotspotsList;
var _c;
__turbopack_context__.k.register(_c, "HotspotsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/ForecastingControls.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForecastingControls",
    ()=>ForecastingControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ForecastingControls() {
    _s();
    const [horizon, setHorizon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    const [isSimulating, setIsSimulating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSimulate = ()=>{
        setIsSimulating(true);
        setTimeout(()=>setIsSimulating(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row items-center gap-6 ring-1 ring-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted-foreground",
                                    children: "Prediction Horizon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: [
                                        horizon,
                                        " Minutes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "range",
                            min: "15",
                            max: "180",
                            step: "15",
                            value: horizon,
                            onChange: (e)=>setHorizon(parseInt(e.target.value)),
                            className: "w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-xs text-muted-foreground/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "15m"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "3h"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 w-full md:w-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSimulate,
                        disabled: isSimulating,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 md:flex-none px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 min-w-[140px]", isSimulating ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/50 cursor-wait" : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.5)]"),
                        children: isSimulating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                                    lineNumber: 53,
                                    columnNumber: 33
                                }, this),
                                "Processing..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-4 h-4 fill-current"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                                    lineNumber: 58,
                                    columnNumber: 33
                                }, this),
                                "Run Forecast"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/ForecastingControls.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(ForecastingControls, "mANNc0H6lupGOxfK/m2OGinbkvw=");
_c = ForecastingControls;
var _c;
__turbopack_context__.k.register(_c, "ForecastingControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/TravelDelay.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TravelDelay",
    ()=>TravelDelay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TravelDelay() {
    _s();
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Dadar");
    const [destination, setDestination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("BKC");
    const [isCalculating, setIsCalculating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const baseTime = 25; // mins
    const [delay, setDelay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10); // stable initial to avoid SSR mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TravelDelay.useEffect": ()=>{
            // deterministic pseudo-random based on source+dest for stable hydration
            const seed = (source + destination).split("").reduce({
                "TravelDelay.useEffect.seed": (a, c)=>a + c.charCodeAt(0)
            }["TravelDelay.useEffect.seed"], 0);
            const pseudo = seed % 21 + 5; // 5-25
            setDelay(pseudo);
        }
    }["TravelDelay.useEffect"], [
        source,
        destination
    ]);
    const totalTime = baseTime + delay;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col p-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Travel Estimator"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Calculate delay on your route"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        className: "text-blue-500 h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-[1fr,auto,1fr] gap-2 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[10px] uppercase text-muted-foreground font-bold tracking-wider",
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 p-2 rounded bg-background/50 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-3 w-3 text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                lineNumber: 39,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "bg-transparent text-sm w-full outline-none",
                                                value: source,
                                                onChange: (e)=>setSource(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Dadar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                        lineNumber: 45,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Andheri"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                        lineNumber: 46,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Colaba"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                        lineNumber: 47,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Thane"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                        lineNumber: 48,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                lineNumber: 40,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[10px] uppercase text-muted-foreground font-bold tracking-wider",
                                        children: "To"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 p-2 rounded bg-background/50 border border-border/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "h-3 w-3 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                lineNumber: 60,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "bg-transparent text-sm w-full outline-none",
                                                value: destination,
                                                onChange: (e)=>setDestination(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "BKC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                        lineNumber: 66,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Powai"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                        lineNumber: 67,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Worli"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                        lineNumber: 68,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Airport"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                        lineNumber: 69,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                                lineNumber: 61,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 rounded-lg bg-background/30 border border-border/30 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Standard Time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-mono",
                                        children: [
                                            baseTime,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-red-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: "Traffic Delay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-mono font-bold",
                                        children: [
                                            "+",
                                            delay,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-border/50 my-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-foreground",
                                        children: "Total Estimate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-mono font-bold text-primary",
                                        children: [
                                            totalTime,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/TravelDelay.jsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(TravelDelay, "U/OfH/IPF907s5pbdLyblx5ed0s=");
_c = TravelDelay;
var _c;
__turbopack_context__.k.register(_c, "TravelDelay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/analytics/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$ForecastingChart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/ForecastingChart.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$HotspotsList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/HotspotsList.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$ForecastingControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/ForecastingControls.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$TravelDelay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/TravelDelay.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function AnalyticsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background text-foreground pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/analytics/page.js",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-24 px-4 max-w-7xl mx-auto space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold mb-2",
                                children: "Predictive Analytics"
                            }, void 0, false, {
                                fileName: "[project]/src/app/analytics/page.js",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "AI-driven traffic forecasting and hotspot analysis."
                            }, void 0, false, {
                                fileName: "[project]/src/app/analytics/page.js",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/analytics/page.js",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$ForecastingChart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForecastingChart"], {}, void 0, false, {
                                    fileName: "[project]/src/app/analytics/page.js",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/analytics/page.js",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$HotspotsList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HotspotsList"], {}, void 0, false, {
                                    fileName: "[project]/src/app/analytics/page.js",
                                    lineNumber: 24,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/analytics/page.js",
                                lineNumber: 23,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/analytics/page.js",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$TravelDelay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TravelDelay"], {}, void 0, false, {
                            fileName: "[project]/src/app/analytics/page.js",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/analytics/page.js",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$ForecastingControls$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForecastingControls"], {}, void 0, false, {
                        fileName: "[project]/src/app/analytics/page.js",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/analytics/page.js",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/analytics/page.js",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
_c = AnalyticsPage;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2c41f0f0._.js.map