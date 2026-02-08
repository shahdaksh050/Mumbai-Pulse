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
"[project]/src/components/ui/card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.jsx",
        lineNumber: 76,
        columnNumber: 9
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            link: "text-primary underline-offset-4 [a&]:hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.jsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
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
"[project]/src/components/dashboard/SegmentNavigator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SegmentNavigator",
    ()=>SegmentNavigator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Dynamically import map to avoid SSR
const LeafletMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/dashboard/LeafletMap.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full min-h-[400px] animate-pulse bg-muted rounded-xl"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
            lineNumber: 16,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c = LeafletMap;
function SegmentNavigator() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [selectedSegment, setSelectedSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedRoad, setSelectedRoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forecastError, setForecastError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [forecastLoading, setForecastLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SegmentNavigator.useEffect": ()=>{
            let mounted = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSegments"])().then({
                "SegmentNavigator.useEffect": (data)=>{
                    if (mounted) {
                        setSegments(data || []);
                    }
                }
            }["SegmentNavigator.useEffect"]).catch({
                "SegmentNavigator.useEffect": (err)=>mounted && setError(err.message)
            }["SegmentNavigator.useEffect"]).finally({
                "SegmentNavigator.useEffect": ()=>mounted && setLoading(false)
            }["SegmentNavigator.useEffect"]);
            return ({
                "SegmentNavigator.useEffect": ()=>{
                    mounted = false;
                }
            })["SegmentNavigator.useEffect"];
        }
    }["SegmentNavigator.useEffect"], []);
    // Apply URL param if present once segments are loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SegmentNavigator.useEffect": ()=>{
            const rid = searchParams.get("road_id");
            if (!rid || !segments.length) return;
            const match = segments.find({
                "SegmentNavigator.useEffect.match": (s)=>s.road_id === rid
            }["SegmentNavigator.useEffect.match"]);
            if (match) {
                setSelectedSegment(match.segment_name);
                setSelectedRoad(match.road_name);
                setSelectedId(match.road_id);
            }
        }
    }["SegmentNavigator.useEffect"], [
        searchParams,
        segments
    ]);
    // Get unique segments
    const allSegments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SegmentNavigator.useMemo[allSegments]": ()=>Array.from(new Set(segments.map({
                "SegmentNavigator.useMemo[allSegments]": (d)=>d.segment_name
            }["SegmentNavigator.useMemo[allSegments]"]))).sort()
    }["SegmentNavigator.useMemo[allSegments]"], [
        segments
    ]);
    // Filter roads based on segment
    const filteredRoads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SegmentNavigator.useMemo[filteredRoads]": ()=>{
            if (!selectedSegment) return [];
            return Array.from(new Set(segments.filter({
                "SegmentNavigator.useMemo[filteredRoads]": (d)=>d.segment_name === selectedSegment
            }["SegmentNavigator.useMemo[filteredRoads]"]).map({
                "SegmentNavigator.useMemo[filteredRoads]": (d)=>d.road_name
            }["SegmentNavigator.useMemo[filteredRoads]"])));
        }
    }["SegmentNavigator.useMemo[filteredRoads]"], [
        segments,
        selectedSegment
    ]);
    // Reset road when segment changes
    const handleSegmentChange = (value)=>{
        setSelectedSegment(value);
        setSelectedRoad("");
        setSelectedId("");
    };
    // Get selected data
    const selectedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SegmentNavigator.useMemo[selectedData]": ()=>{
            if (selectedId) return segments.find({
                "SegmentNavigator.useMemo[selectedData]": (d)=>d.road_id === selectedId
            }["SegmentNavigator.useMemo[selectedData]"]) || null;
            if (!selectedSegment || !selectedRoad) return null;
            return segments.find({
                "SegmentNavigator.useMemo[selectedData]": (d)=>d.segment_name === selectedSegment && d.road_name === selectedRoad
            }["SegmentNavigator.useMemo[selectedData]"]);
        }
    }["SegmentNavigator.useMemo[selectedData]"], [
        segments,
        selectedSegment,
        selectedRoad,
        selectedId
    ]);
    // Fetch forecast for selected road
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SegmentNavigator.useEffect": ()=>{
            if (!selectedData?.road_id) return;
            setForecastLoading(true);
            setForecastError("");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchDatathonForecast"])(selectedData.road_id, new Date().toISOString()).then({
                "SegmentNavigator.useEffect": (data)=>setForecast(data)
            }["SegmentNavigator.useEffect"]).catch({
                "SegmentNavigator.useEffect": (err)=>setForecastError(err.message)
            }["SegmentNavigator.useEffect"]).finally({
                "SegmentNavigator.useEffect": ()=>setForecastLoading(false)
            }["SegmentNavigator.useEffect"]);
        }
    }["SegmentNavigator.useEffect"], [
        selectedData?.road_id
    ]);
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SegmentNavigator.useMemo[chartData]": ()=>{
            if (!forecast) return [];
            const entries = [
                {
                    key: "pred_congestion_plus_1h",
                    hours: 1
                },
                {
                    key: "pred_congestion_plus_2h",
                    hours: 2
                },
                {
                    key: "pred_congestion_plus_6h",
                    hours: 6
                },
                {
                    key: "pred_congestion_plus_24h",
                    hours: 24
                }
            ];
            const base = new Date(forecast.timestamp || Date.now());
            return entries.map({
                "SegmentNavigator.useMemo[chartData]": ({ key, hours })=>({
                        label: `+${hours}h`,
                        value: (forecast[key] ?? 0) * 100,
                        time: new Date(base.getTime() + hours * 3600 * 1000).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    })
            }["SegmentNavigator.useMemo[chartData]"]);
        }
    }["SegmentNavigator.useMemo[chartData]"], [
        forecast
    ]);
    // Simulated status
    const getStatus = ()=>{
        const statuses = [
            {
                label: "Clear",
                color: "text-emerald-500",
                bg: "bg-emerald-500/10"
            },
            {
                label: "Moderate",
                color: "text-yellow-500",
                bg: "bg-yellow-500/10"
            },
            {
                label: "Heavy",
                color: "text-orange-500",
                bg: "bg-orange-500/10"
            },
            {
                label: "Gridlock",
                color: "text-red-500",
                bg: "bg-red-500/10"
            }
        ];
        // Use road_id as seed for consistent simulation (optional, or just random)
        return statuses[Math.floor(Math.random() * statuses.length)];
    };
    const status = selectedData ? getStatus() : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-card/40 backdrop-blur-sm border-border/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                className: "w-5 h-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this),
                                            "Traffic Navigator"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Select a road segment to analyze traffic conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                lineNumber: 135,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: [
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Loading segments..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 143,
                                        columnNumber: 37
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-500",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 144,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "1. Select Road Segment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full p-2.5 rounded-md bg-background border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                                                value: selectedSegment,
                                                onChange: (e)=>handleSegmentChange(e.target.value),
                                                disabled: loading || !!error,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a segment..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 33
                                                    }, this),
                                                    allSegments.map((segment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: segment,
                                                            children: segment
                                                        }, segment, false, {
                                                            fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                            lineNumber: 155,
                                                            columnNumber: 37
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 147,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium text-muted-foreground",
                                                children: "2. Confirmed Road Path"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full p-2.5 rounded-md bg-background border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50",
                                                value: selectedRoad,
                                                onChange: (e)=>setSelectedRoad(e.target.value),
                                                disabled: !selectedSegment || loading || !!error,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a road..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 33
                                                    }, this),
                                                    filteredRoads.map((road)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: road,
                                                            children: road
                                                        }, road, false, {
                                                            fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                            lineNumber: 170,
                                                            columnNumber: 37
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 162,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    selectedData && status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-card/40 backdrop-blur-sm border-border/50 overflow-hidden relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 p-4 opacity-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "w-24 h-24"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                    lineNumber: 180,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                lineNumber: 179,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-6 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-bold",
                                                        children: selectedData.road_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 185,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: selectedData.segment_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 184,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: `${status.bg} ${status.color} border-current`,
                                                children: status.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 188,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 183,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-secondary/20 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Road Class"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono font-bold capitalize",
                                                        children: selectedData.road_class
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 194,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-secondary/20 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-primary",
                                                        children: selectedData.road_id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 200,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 198,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 193,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 205,
                                                columnNumber: 33
                                            }, this),
                                            "Coordinates: ",
                                            selectedData.lat,
                                            ", ",
                                            selectedData.lon
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 204,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                lineNumber: 182,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                        lineNumber: 178,
                        columnNumber: 21
                    }, this),
                    selectedData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-card/40 backdrop-blur-sm border-border/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-base",
                                        children: "Forecast"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 215,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: [
                                            "Predicted congestion for ",
                                            selectedData.road_id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 216,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    forecastError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-500 mb-2",
                                        children: forecastError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 219,
                                        columnNumber: 47
                                    }, this),
                                    forecastLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground mb-2",
                                        children: "Loading forecast…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 220,
                                        columnNumber: 49
                                    }, this),
                                    !forecastLoading && chartData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "No forecast available."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 222,
                                        columnNumber: 33
                                    }, this),
                                    chartData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[280px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            minWidth: 0,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                data: chartData,
                                                margin: {
                                                    top: 16,
                                                    right: 16,
                                                    bottom: 8,
                                                    left: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "var(--border)",
                                                        opacity: 0.3,
                                                        vertical: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "label",
                                                        stroke: "var(--muted-foreground)",
                                                        fontSize: 11,
                                                        tickLine: false,
                                                        axisLine: false,
                                                        dy: 6
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        stroke: "var(--muted-foreground)",
                                                        fontSize: 11,
                                                        tickLine: false,
                                                        axisLine: false,
                                                        domain: [
                                                            0,
                                                            100
                                                        ],
                                                        tickFormatter: (v)=>`${v}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            background: "var(--popover)",
                                                            border: `1px solid var(--border)`,
                                                            color: "var(--popover-foreground)"
                                                        },
                                                        labelStyle: {
                                                            color: "var(--muted-foreground)"
                                                        },
                                                        formatter: (v)=>[
                                                                `${v.toFixed?.(1) ?? v}%`,
                                                                "Congestion"
                                                            ]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 231,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "value",
                                                        stroke: "var(--primary)",
                                                        strokeWidth: 2,
                                                        dot: {
                                                            r: 3,
                                                            fill: "var(--primary)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                                lineNumber: 227,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                            lineNumber: 226,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                lineNumber: 218,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                        lineNumber: 213,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                lineNumber: 133,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[400px] h-full rounded-xl overflow-hidden border border-border/50 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeafletMap, {
                    center: selectedData ? [
                        selectedData.lat,
                        selectedData.lon
                    ] : [
                        19.0760,
                        72.8777
                    ],
                    zoom: selectedData ? 15 : 12,
                    markers: selectedData ? [
                        {
                            id: selectedData.road_id,
                            lat: selectedData.lat,
                            lng: selectedData.lon,
                            popupContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 min-w-[150px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold mb-1",
                                        children: selectedData.segment_name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 257,
                                        columnNumber: 33
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 font-mono",
                                        children: selectedData.road_id
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                        lineNumber: 258,
                                        columnNumber: 33
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                                lineNumber: 256,
                                columnNumber: 29
                            }, void 0)
                        }
                    ] : undefined
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                    lineNumber: 248,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
                lineNumber: 247,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/SegmentNavigator.jsx",
        lineNumber: 131,
        columnNumber: 9
    }, this);
}
_s(SegmentNavigator, "VKWU9FKwg6gTYZY7P/KoebYDeZ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c1 = SegmentNavigator;
var _c, _c1;
__turbopack_context__.k.register(_c, "LeafletMap");
__turbopack_context__.k.register(_c1, "SegmentNavigator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/navigator/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigatorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$SegmentNavigator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/SegmentNavigator.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function NavigatorPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background text-foreground pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/navigator/page.js",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-24 px-4 max-w-7xl mx-auto space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold mb-2",
                                children: "Traffic Navigator"
                            }, void 0, false, {
                                fileName: "[project]/src/app/navigator/page.js",
                                lineNumber: 12,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "Pinpoint specific road segments and analyze real-time conditions."
                            }, void 0, false, {
                                fileName: "[project]/src/app/navigator/page.js",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/navigator/page.js",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$SegmentNavigator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentNavigator"], {}, void 0, false, {
                        fileName: "[project]/src/app/navigator/page.js",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/navigator/page.js",
                lineNumber: 10,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/navigator/page.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = NavigatorPage;
var _c;
__turbopack_context__.k.register(_c, "NavigatorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e413bde2._.js.map