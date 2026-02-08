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
    "generateMitigation",
    ()=>generateMitigation,
    "searchPredictions",
    ()=>searchPredictions,
    "sendChatMessage",
    ()=>sendChatMessage
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
async function fetchDatathonForecast(road_id, timestamp, current_congestion_pct) {
    return request("/api/datathon/forecast", {
        method: "POST",
        body: JSON.stringify({
            road_id,
            timestamp,
            current_congestion_pct
        })
    });
}
async function generateMitigation(criticalSegments) {
    return request("/api/generate-mitigation", {
        method: "POST",
        body: JSON.stringify({
            critical_segments: criticalSegments
        })
    });
}
async function sendChatMessage(user_message, chat_history, live_context) {
    return request("/api/chat/message", {
        method: "POST",
        body: JSON.stringify({
            user_message,
            chat_history,
            live_context
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
"[project]/src/app/map/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Dynamically import Leaflet map to avoid SSR issues
const LeafletMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full min-h-[500px] animate-pulse bg-muted rounded-xl"
        }, void 0, false, {
            fileName: "[project]/src/app/map/page.js",
            lineNumber: 15,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c = LeafletMap;
const REFRESH_MS = 5 * 60 * 1000;
function MapPage() {
    _s();
    const { segments, readings, loading, error } = useTrafficData(REFRESH_MS);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tileTheme, setTileTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const indexedSegments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapPage.useMemo[indexedSegments]": ()=>{
            const m = new Map();
            segments.forEach({
                "MapPage.useMemo[indexedSegments]": (s)=>m.set(s.road_id, s)
            }["MapPage.useMemo[indexedSegments]"]);
            return m;
        }
    }["MapPage.useMemo[indexedSegments]"], [
        segments
    ]);
    // Keep only the most recent reading per road_id (current snapshot)
    const latestReadings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapPage.useMemo[latestReadings]": ()=>{
            const latest = new Map();
            readings.forEach({
                "MapPage.useMemo[latestReadings]": (r)=>{
                    const existing = latest.get(r.road_id);
                    const ts = r.timestamp ? new Date(r.timestamp).getTime() : 0;
                    const exTs = existing?.timestamp ? new Date(existing.timestamp).getTime() : -Infinity;
                    if (!existing || ts > exTs) {
                        latest.set(r.road_id, r);
                    }
                }
            }["MapPage.useMemo[latestReadings]"]);
            return Array.from(latest.values());
        }
    }["MapPage.useMemo[latestReadings]"], [
        readings
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapPage.useMemo[filtered]": ()=>{
            const q = query.toLowerCase();
            return latestReadings.filter({
                "MapPage.useMemo[filtered]": (r)=>{
                    const seg = indexedSegments.get(r.road_id);
                    const hay = `${r.road_id} ${seg?.road_name || ""} ${seg?.segment_name || ""}`.toLowerCase();
                    return !q || hay.includes(q);
                }
            }["MapPage.useMemo[filtered]"]).sort({
                "MapPage.useMemo[filtered]": (a, b)=>(b.congestion_pct || 0) - (a.congestion_pct || 0)
            }["MapPage.useMemo[filtered]"]);
        }
    }["MapPage.useMemo[filtered]"], [
        latestReadings,
        query,
        indexedSegments
    ]);
    const colorFor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapPage.useCallback[colorFor]": (pct)=>pct >= 70 ? "#ef4444" : pct >= 40 ? "#f59e0b" : "#22c55e"
    }["MapPage.useCallback[colorFor]"], []);
    const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapPage.useMemo[markers]": ()=>{
            return filtered.map({
                "MapPage.useMemo[markers]": (r, idx)=>{
                    const seg = indexedSegments.get(r.road_id);
                    if (seg?.lat == null || seg?.lon == null) return null;
                    const pct = r.congestion_pct || 0;
                    const color = colorFor(pct);
                    return {
                        id: `${r.road_id}-${idx}`,
                        linkedId: r.road_id,
                        lat: seg.lat,
                        lng: seg.lon,
                        color,
                        popupContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold",
                                    children: seg.segment_name || seg.road_name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/map/page.js",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: r.road_id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/map/page.js",
                                    lineNumber: 75,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: [
                                        "Congestion: ",
                                        pct.toFixed?.(1) ?? pct,
                                        "% ",
                                        r.congestion_band ? `(${r.congestion_band})` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.js",
                                    lineNumber: 76,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/navigator?road_id=${r.road_id}`,
                                    className: "text-primary text-sm font-semibold",
                                    children: "View forecast →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/map/page.js",
                                    lineNumber: 77,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/map/page.js",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this)
                    };
                }
            }["MapPage.useMemo[markers]"]).filter(Boolean);
        }
    }["MapPage.useMemo[markers]"], [
        filtered,
        indexedSegments,
        colorFor
    ]);
    const onMarkerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MapPage.useCallback[onMarkerClick]": (id)=>{
            setSelectedId(id);
            const el = document.getElementById(`card-${id}`);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }
    }["MapPage.useCallback[onMarkerClick]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/map/page.js",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-20 px-4 max-w-7xl mx-auto space-y-6 h-[calc(100vh-80px)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between flex-wrap gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold",
                                    children: "Live Traffic Grid"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/map/page.js",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm text-emerald-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex h-2 w-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 102,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 103,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/map/page.js",
                                            lineNumber: 101,
                                            columnNumber: 29
                                        }, this),
                                        "System Online"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.js",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/map/page.js",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 h-full pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2 h-full min-h-[500px] rounded-xl overflow-hidden border border-border relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeafletMap, {
                                            markers: markers,
                                            onMarkerClick: onMarkerClick,
                                            tileTheme: tileTheme
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.js",
                                            lineNumber: 112,
                                            columnNumber: 29
                                        }, this),
                                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-6 w-6 animate-spin text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/map/page.js",
                                                lineNumber: 115,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/map/page.js",
                                            lineNumber: 114,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.js",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1 h-full min-h-[500px] flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold",
                                                    children: "Search location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 123,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full p-2.5 rounded-md bg-background border border-border/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                                                    placeholder: "Search by road, segment, or ID",
                                                    value: query,
                                                    onChange: (e)=>setQuery(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 124,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-xs text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Map theme"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/map/page.js",
                                                            lineNumber: 131,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "bg-background border border-border/60 rounded-md px-2 py-1 text-xs",
                                                            value: tileTheme,
                                                            onChange: (e)=>setTileTheme(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "light",
                                                                    children: "Light"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/map/page.js",
                                                                    lineNumber: 137,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "dark",
                                                                    children: "Dark"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/map/page.js",
                                                                    lineNumber: 138,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/map/page.js",
                                                            lineNumber: 132,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 130,
                                                    columnNumber: 33
                                                }, this),
                                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-red-500",
                                                    children: error
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 141,
                                                    columnNumber: 43
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: [
                                                        "Showing ",
                                                        filtered.length,
                                                        " of ",
                                                        readings.length,
                                                        " live readings"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 142,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/map/page.js",
                                            lineNumber: 122,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-auto rounded-xl border border-border bg-card/40 backdrop-blur-sm p-3 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold",
                                                    children: "Live traffic feed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 146,
                                                    columnNumber: 33
                                                }, this),
                                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Loading…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 147,
                                                    columnNumber: 45
                                                }, this),
                                                !loading && filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "No locations match your search."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/map/page.js",
                                                    lineNumber: 148,
                                                    columnNumber: 71
                                                }, this),
                                                filtered.map((r, idx)=>{
                                                    const seg = indexedSegments.get(r.road_id) || {};
                                                    const pct = r.congestion_pct || 0;
                                                    const color = colorFor(pct);
                                                    const isSelected = selectedId === r.road_id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        id: `card-${r.road_id}`,
                                                        onClick: ()=>setSelectedId(r.road_id),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("p-3 rounded-lg border bg-background/40 cursor-pointer transition-colors", isSelected ? "border-cyan-400/60 bg-cyan-900/10" : "border-border/60 hover:border-cyan-500/40"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-0.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-semibold text-sm text-foreground flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                        className: "h-3 w-3 text-cyan-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/map/page.js",
                                                                                        lineNumber: 167,
                                                                                        columnNumber: 57
                                                                                    }, this),
                                                                                    " ",
                                                                                    seg.segment_name || seg.road_name || r.road_id
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/map/page.js",
                                                                                lineNumber: 166,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] text-muted-foreground",
                                                                                children: [
                                                                                    seg.road_name,
                                                                                    " · ",
                                                                                    r.road_id
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/map/page.js",
                                                                                lineNumber: 169,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/map/page.js",
                                                                        lineNumber: 165,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] px-2 py-1 rounded-full font-semibold",
                                                                        style: {
                                                                            backgroundColor: `${color}22`,
                                                                            color: color
                                                                        },
                                                                        children: [
                                                                            pct.toFixed?.(1) ?? pct,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/map/page.js",
                                                                        lineNumber: 171,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/map/page.js",
                                                                lineNumber: 164,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between mt-2 text-[11px] text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: formatTime(r.timestamp)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/map/page.js",
                                                                        lineNumber: 179,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/navigator?road_id=${r.road_id}`,
                                                                        className: "text-primary font-semibold",
                                                                        children: "View forecast"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/map/page.js",
                                                                        lineNumber: 180,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/map/page.js",
                                                                lineNumber: 178,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, `${r.road_id}-${idx}`, true, {
                                                        fileName: "[project]/src/app/map/page.js",
                                                        lineNumber: 155,
                                                        columnNumber: 41
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/map/page.js",
                                            lineNumber: 145,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/map/page.js",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/map/page.js",
                            lineNumber: 109,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/map/page.js",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/map/page.js",
                lineNumber: 96,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/map/page.js",
        lineNumber: 94,
        columnNumber: 9
    }, this);
}
_s(MapPage, "UlXV6jF+3aqUN5j3vulLVgMSlxI=", false, function() {
    return [
        useTrafficData
    ];
});
_c1 = MapPage;
function useTrafficData(refreshMs = REFRESH_MS) {
    _s1();
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [readings, setReadings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTrafficData.useEffect": ()=>{
            let mounted = true;
            const load = {
                "useTrafficData.useEffect.load": async ()=>{
                    setLoading(true);
                    try {
                        const [segData, readingData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSegments"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchPredictions"])({
                                limit: 1000
                            })
                        ]);
                        if (!mounted) return;
                        setSegments(segData || []);
                        setReadings(readingData || []);
                        setError("");
                    } catch (err) {
                        if (mounted) setError(err.message || "Failed to load map data");
                    } finally{
                        if (mounted) setLoading(false);
                    }
                }
            }["useTrafficData.useEffect.load"];
            load();
            const id = setInterval(load, refreshMs);
            return ({
                "useTrafficData.useEffect": ()=>{
                    mounted = false;
                    clearInterval(id);
                }
            })["useTrafficData.useEffect"];
        }
    }["useTrafficData.useEffect"], [
        refreshMs
    ]);
    return {
        segments,
        readings,
        loading,
        error
    };
}
_s1(useTrafficData, "7aiK/INzcM+EJSEmAcbXxyZxHMY=");
function formatTime(ts) {
    if (!ts) return "--";
    const d = new Date(ts);
    if (Number.isNaN(d.getTime())) return ts;
    return d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}
var _c, _c1;
__turbopack_context__.k.register(_c, "LeafletMap");
__turbopack_context__.k.register(_c1, "MapPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_32d06d1e._.js.map