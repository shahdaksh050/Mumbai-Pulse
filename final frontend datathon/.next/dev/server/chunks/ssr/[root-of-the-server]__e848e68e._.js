module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            name: "Home",
            href: "/",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
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
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Navbar.jsx",
                lineNumber: 19,
                columnNumber: 50
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2 font-bold text-xl text-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-10 flex items-baseline space-x-4",
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2", pathname === item.href ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"),
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "-mr-2 flex md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 focus:outline-none",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/Navbar.jsx",
                                    lineNumber: 62,
                                    columnNumber: 39
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setIsOpen(false),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2", pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"),
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
}),
"[project]/src/lib/staticSegments.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/lib/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$staticSegments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/staticSegments.js [app-ssr] (ecmascript)");
;
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$staticSegments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATIC_SEGMENTS"];
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$staticSegments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATIC_SEGMENTS"].map((seg, idx)=>{
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
}),
"[project]/src/components/dashboard/TrafficChatbot.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrafficChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
"use client";
;
;
;
;
function TrafficChatbot({ criticalSegments = [] }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: "ai",
            text: "I'm online. Ask about any critical road and I’ll propose a quick mitigation."
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatHistoryPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>messages.map((m)=>({
                role: m.role === "ai" ? "assistant" : "user",
                content: m.text
            })), [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [
        messages,
        loading
    ]);
    const handleSend = async ()=>{
        const trimmed = input.trim();
        if (!trimmed || loading) return;
        const nextMessages = [
            ...messages,
            {
                role: "user",
                text: trimmed
            }
        ];
        setMessages(nextMessages);
        setInput("");
        setLoading(true);
        setError("");
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendChatMessage"])(trimmed, chatHistoryPayload, criticalSegments);
            setMessages([
                ...nextMessages,
                {
                    role: "ai",
                    text: res.reply
                }
            ]);
        } catch (err) {
            setError(err.message || "Failed to get response");
        } finally{
            setLoading(false);
        }
    };
    const onKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-emerald-400/30 bg-slate-950/80 text-slate-50 shadow-[0_0_0_1px_rgba(52,211,153,0.2)] p-4 flex flex-col min-h-[320px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: "Traffic Command AI"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-emerald-200/80",
                        children: "Online"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 overflow-y-auto space-y-3 pr-1",
                children: [
                    messages.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${m.role === "user" ? "bg-cyan-500/20 border border-cyan-400/40 text-cyan-50" : "bg-slate-800/80 border border-slate-700 text-slate-100"}`,
                                children: m.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this)),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-emerald-200/80 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this),
                            "Thinking..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-red-400",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                        lineNumber: 82,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: onKeyDown,
                        rows: 2,
                        placeholder: "Ask about any critical road...",
                        className: "flex-1 bg-slate-900 border border-emerald-500/30 rounded-lg px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 resize-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        disabled: loading || !input.trim(),
                        className: "h-10 px-3 rounded-lg bg-emerald-500 text-black font-semibold text-sm flex items-center gap-2 disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            "Send"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
                lineNumber: 85,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/TrafficChatbot.jsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/hooks/useDashboardContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboardContext",
    ()=>useDashboardContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current=rain,showers&hourly=rain";
function buildLocalSummary(rainMm, activeEvent) {
    const parts = [];
    if (rainMm > 2) parts.push("moderate rain");
    if (activeEvent) parts.push(`${activeEvent.name} active`);
    if (!parts.length) return "Traffic normal, stay alert.";
    return `${parts.join(" & ")}. Drive safe.`;
}
function useDashboardContext() {
    const [rainMm, setRainMm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rainWindow, setRainWindow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingSummary, setLoadingSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorSummary, setErrorSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        const loadWeather = async ()=>{
            try {
                const res = await fetch(WEATHER_URL);
                const json = await res.json();
                const currentRain = json?.current?.rain ?? 0;
                if (!cancelled) setRainMm(currentRain);
                const hours = json?.hourly?.time || [];
                const rains = json?.hourly?.rain || [];
                const idx2pm = hours.findIndex((t)=>t.includes("T14:00"));
                const idx6pm = hours.findIndex((t)=>t.includes("T18:00"));
                if (idx2pm !== -1 && idx6pm !== -1) {
                    const slice = rains.slice(idx2pm, idx6pm + 1);
                    const heavy = slice.some((v)=>(v ?? 0) > 2);
                    if (!cancelled) setRainWindow(heavy ? {
                        start: 14,
                        end: 18
                    } : null);
                }
            } catch (err) {
            // keep silent; UI will continue without weather overlays
            }
        };
        loadWeather();
        return ()=>{
            cancelled = true;
        };
    }, []);
    const activeEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const nowHour = new Date().getHours();
        return events.find((e)=>nowHour >= e.start && nowHour < e.end) || null;
    }, [
        events
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = ("TURBOPACK compile-time value", "your_eventbrite_private_token");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let cancelled = false;
        const loadEvents = async ()=>{
            try {
                const now = new Date();
                const startIso = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
                const url = new URL("https://www.eventbriteapi.com/v3/events/search/");
                url.searchParams.set("location.address", "Mumbai");
                url.searchParams.set("location.within", "50km");
                url.searchParams.set("expand", "venue");
                url.searchParams.set("sort_by", "date");
                url.searchParams.set("start_date.range_start", startIso);
                const res = await fetch(url.toString(), {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!res.ok) throw new Error("Events API failed");
                const json = await res.json();
                const mapped = (json?.events || []).map((e)=>{
                    const start = e.start?.local ? new Date(e.start.local) : null;
                    const end = e.end?.local ? new Date(e.end.local) : null;
                    const startHour = start ? start.getHours() : null;
                    const endHour = end ? end.getHours() : null;
                    return {
                        name: e.name?.text || "Event",
                        start: startHour ?? 0,
                        end: endHour ?? (startHour != null ? startHour + 2 : 2),
                        venue: e.venue?.name || e.venue?.address?.localized_address_display || "Mumbai",
                        impact: "high"
                    };
                }).filter((e)=>e.start != null && e.end != null);
                if (!cancelled) setEvents(mapped);
            } catch (err) {
                if (!cancelled) setEvents([]);
            }
        };
        loadEvents();
        return ()=>{
            cancelled = true;
        };
    }, []);
    const fetchGroqSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setLoadingSummary(true);
        setErrorSummary("");
        setSummary(buildLocalSummary(rainMm, activeEvent));
        setLoadingSummary(false);
    }, [
        rainMm,
        activeEvent
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchGroqSummary();
    }, [
        fetchGroqSummary
    ]);
    return {
        rainMm,
        rainWindow,
        events,
        activeEvent,
        summary,
        loadingSummary,
        errorSummary,
        refreshSummary: fetchGroqSummary
    };
}
}),
"[project]/src/components/dashboard/ForecastingChart.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForecastingChart",
    ()=>ForecastingChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceArea.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDashboardContext.js [app-ssr] (ecmascript)");
"use client";
;
;
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
function ForecastingChart({ context, data }) {
    const { events, rainWindow } = context || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDashboardContext"])();
    const [segments, setSegments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roadId, setRoadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [timestamp, setTimestamp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Date().toISOString());
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSegments"])().then((data)=>{
            if (!mounted) return;
            setSegments(data || []);
            if (data && data.length && !roadId) {
                setRoadId(data[0].road_id);
            }
        }).catch((err)=>mounted && setError(err.message));
        return ()=>{
            mounted = false;
        };
    }, [
        roadId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!roadId || !timestamp) return;
        if (Array.isArray(data) && data.length) return;
        let mounted = true;
        setLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDatathonForecast"])(roadId, timestamp).then((data)=>{
            if (mounted) {
                setForecast(data);
                setError("");
            }
        }).catch((err)=>mounted && setError(err.message)).finally(()=>mounted && setLoading(false));
        return ()=>{
            mounted = false;
        };
    }, [
        roadId,
        timestamp
    ]);
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (Array.isArray(data) && data.length) return data;
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
        return entries.map(({ key, hours, band })=>{
            const t = new Date(base.getTime() + hours * 60 * 60 * 1000);
            const value = forecast[key] != null ? forecast[key] * 100 : null;
            return {
                hour: hours,
                label: `+${hours}h`,
                time: t.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                }),
                value,
                band
            };
        }).filter((d)=>d.value !== null);
    }, [
        data,
        forecast,
        timestamp
    ]);
    const hotData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>chartData.map((d)=>({
                ...d,
                hot: d.value >= 90 ? d.value : null
            })), [
        chartData
    ]);
    const showControls = !(Array.isArray(data) && data.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-[320px] flex flex-col p-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-foreground",
                                children: "Traffic Forecast (Datathon model)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Live predictions from backend (+1h, +2h, +6h, +24h)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "p-2 rounded-md bg-background border border-border/60",
                                value: roadId,
                                onChange: (e)=>setRoadId(e.target.value),
                                disabled: !segments.length,
                                children: [
                                    !segments.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Loading roads..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                        lineNumber: 104,
                                        columnNumber: 50
                                    }, this),
                                    segments.map((seg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: seg.road_id,
                                            children: [
                                                seg.road_name,
                                                " (",
                                                seg.road_id,
                                                ")"
                                            ]
                                        }, seg.road_id, true, {
                                            fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                            lineNumber: 106,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                lineNumber: 111,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                        lineNumber: 97,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-500 mb-2",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                lineNumber: 128,
                columnNumber: 23
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-muted-foreground mb-2",
                children: "Fetching forecast…"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                lineNumber: 129,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full min-h-[260px] min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: 320,
                    minWidth: 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                        data: hotData,
                        margin: {
                            top: 12,
                            right: 16,
                            bottom: 8,
                            left: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "congestion-gradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "var(--primary)",
                                            stopOpacity: 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                            lineNumber: 136,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "var(--primary)",
                                            stopOpacity: 0.85
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                            lineNumber: 137,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                stroke: "var(--border)",
                                opacity: 0.3,
                                vertical: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 141,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "hour",
                                stroke: "var(--muted-foreground)",
                                fontSize: 10,
                                tickLine: false,
                                axisLine: false,
                                dy: 10,
                                tickFormatter: (v)=>`+${v}h`,
                                domain: [
                                    0,
                                    24
                                ],
                                type: "number"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 142,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                                lineNumber: 153,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
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
                                lineNumber: 162,
                                columnNumber: 25
                            }, this),
                            rainWindow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReferenceArea"], {
                                x1: rainWindow.start,
                                x2: rainWindow.end,
                                y1: 0,
                                y2: 100,
                                fill: "blue",
                                fillOpacity: 0.1,
                                stroke: "none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 177,
                                columnNumber: 29
                            }, this),
                            events?.map((event, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReferenceArea"], {
                                    x1: event.start,
                                    x2: event.end,
                                    y1: 0,
                                    y2: 100,
                                    fill: "purple",
                                    fillOpacity: 0.08,
                                    stroke: "none"
                                }, `${event.name}-${idx}`, false, {
                                    fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                    lineNumber: 189,
                                    columnNumber: 29
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                type: "monotone",
                                dataKey: "value",
                                stroke: "url(#congestion-gradient)",
                                strokeWidth: 2.5,
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
                                lineNumber: 201,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                type: "monotone",
                                dataKey: "hot",
                                stroke: "red",
                                strokeWidth: 3,
                                dot: false,
                                connectNulls: true,
                                isAnimationActive: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                                lineNumber: 211,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
                lineNumber: 131,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/ForecastingChart.jsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/analytics/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$TrafficChatbot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/TrafficChatbot.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDashboardContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$ForecastingChart$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/ForecastingChart.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const horizonOptions = [
    60,
    120,
    360,
    1440
]; // minutes => 1h, 2h, 6h, 24h
function AnalyticsPage() {
    const [liveReadings, setLiveReadings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSegment, setSelectedSegment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forecast, setForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingForecast, setLoadingForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [horizonMinutes, setHorizonMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(360);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDashboardContext"])();
    // Fetch metadata + live congestion snapshots (synthetic when backend lacks live stream)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        const load = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchPredictions"])().then((data)=>mounted && setLiveReadings(data)).catch(()=>{});
        load();
        const id = setInterval(load, 5 * 60 * 1000); // refresh every 5 minutes
        return ()=>{
            mounted = false;
            clearInterval(id);
        };
    }, []);
    // Default selection: top hotspot once readings load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedSegment || !liveReadings.length) return;
        const top = getHotspots(liveReadings)[0];
        if (top) setSelectedSegment(top);
    }, [
        liveReadings,
        selectedSegment
    ]);
    // Fetch forecast when selected changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedSegment) return;
        let mounted = true;
        const fetchForecast = ()=>{
            setLoadingForecast(true);
            setError("");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchDatathonForecast"])(selectedSegment.road_id, new Date().toISOString(), selectedSegment.congestion_pct).then((data)=>mounted && setForecast(data)).catch((err)=>mounted && setError(err.message)).finally(()=>mounted && setLoadingForecast(false));
        };
        fetchForecast();
        const id = setInterval(fetchForecast, 5 * 60 * 1000); // refresh every 5 minutes
        return ()=>{
            mounted = false;
            clearInterval(id);
        };
    }, [
        selectedSegment
    ]);
    const hotspots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getHotspots(liveReadings), [
        liveReadings
    ]);
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!forecast) return [];
        const now = new Date(forecast.timestamp || Date.now());
        const current = {
            hour: 0,
            label: "Now",
            time: now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            }),
            value: selectedSegment?.congestion_pct ?? 0
        };
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
        const maxHours = horizonMinutes / 60;
        const future = entries.filter((e)=>e.hours <= maxHours).map((e)=>({
                hour: e.hours,
                label: `+${e.hours}h`,
                time: new Date(now.getTime() + e.hours * 3600 * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                }),
                value: (forecast[e.key] ?? 0) * 100
            }));
        return [
            current,
            ...future
        ];
    }, [
        forecast,
        horizonMinutes,
        selectedSegment
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-[#05060a] via-[#0b0f1a] to-[#05060a] text-foreground pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/analytics/page.js",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-24 px-4 max-w-7xl mx-auto space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-400/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px w-8 bg-cyan-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/analytics/page.js",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, this),
                                    "Live Predictive Ops"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/analytics/page.js",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-semibold text-white",
                                                children: "Analytics Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 110,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400",
                                                children: "Linked hotspots → forecast → travel estimator."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 111,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/page.js",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "h-4 w-4 text-cyan-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this),
                                            " ",
                                            context.loadingSummary ? "Context syncing…" : context.summary || "Live data stream"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/page.js",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/analytics/page.js",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/analytics/page.js",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "lg:col-span-2 rounded-xl border border-cyan-500/10 bg-slate-950/60 shadow-[0_0_0_1px_rgba(0,255,255,0.08)] p-4 flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-white flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                className: "h-5 w-5 text-cyan-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/analytics/page.js",
                                                                lineNumber: 124,
                                                                columnNumber: 37
                                                            }, this),
                                                            " Forecast"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/analytics/page.js",
                                                        lineNumber: 123,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-400",
                                                        children: "Datathon multi-horizon model, segment-linked."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/page.js",
                                                        lineNumber: 126,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 122,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-slate-300",
                                                children: [
                                                    "Horizon",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: horizonMinutes,
                                                        onChange: (e)=>setHorizonMinutes(Number(e.target.value)),
                                                        className: "bg-slate-900 border border-cyan-500/30 text-cyan-100 text-xs rounded-md px-2 py-1",
                                                        children: horizonOptions.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: m,
                                                                children: m >= 1440 ? "24h" : `${m / 60}h`
                                                            }, m, false, {
                                                                fileName: "[project]/src/app/analytics/page.js",
                                                                lineNumber: 136,
                                                                columnNumber: 41
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/page.js",
                                                        lineNumber: 130,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 128,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/page.js",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-h-[320px] rounded-lg bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-cyan-500/10 p-3",
                                        children: [
                                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-400 mb-2",
                                                children: error
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 143,
                                                columnNumber: 39
                                            }, this),
                                            loadingForecast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-300",
                                                children: "Fetching forecast…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 144,
                                                columnNumber: 49
                                            }, this),
                                            !loadingForecast && chartData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: "Select a hotspot to load predictions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 146,
                                                columnNumber: 33
                                            }, this),
                                            chartData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$ForecastingChart$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForecastingChart"], {
                                                context: context,
                                                data: chartData
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 149,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/page.js",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this),
                                    selectedSegment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-slate-300",
                                        children: [
                                            "Showing ",
                                            selectedSegment.segment_name,
                                            " (",
                                            selectedSegment.road_id,
                                            ") · ",
                                            chartData.length,
                                            " horizons · live congestion ",
                                            selectedSegment.congestion_pct?.toFixed?.(1) ?? "--",
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/page.js",
                                        lineNumber: 153,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/analytics/page.js",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-xl border border-amber-400/20 bg-slate-950/70 p-4 shadow-[0_0_0_1px_rgba(251,191,36,0.18)] flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                        className: "h-5 w-5 text-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/analytics/page.js",
                                                        lineNumber: 162,
                                                        columnNumber: 33
                                                    }, this),
                                                    " Top 5 Critical Roads"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] px-2 py-1 rounded-full bg-amber-400/10 text-amber-200 border border-amber-400/30",
                                                children: "Live"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 164,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/page.js",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            hotspots.map((seg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedSegment(seg),
                                                    className: `w-full text-left rounded-lg border px-3 py-2 transition-colors ${selectedSegment?.road_id === seg.road_id ? "border-cyan-400/60 bg-cyan-900/30" : "border-amber-400/20 bg-amber-400/5 hover:border-amber-300/40"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-sm text-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: seg.segment_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/analytics/page.js",
                                                                    lineNumber: 178,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-amber-200 font-semibold",
                                                                    children: [
                                                                        seg.congestion_pct.toFixed(1),
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/analytics/page.js",
                                                                    lineNumber: 179,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/analytics/page.js",
                                                            lineNumber: 177,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-[11px] text-amber-200/90",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/analytics/page.js",
                                                                    lineNumber: 182,
                                                                    columnNumber: 41
                                                                }, this),
                                                                " ",
                                                                seg.road_name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/analytics/page.js",
                                                            lineNumber: 181,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, seg.road_id, true, {
                                                    fileName: "[project]/src/app/analytics/page.js",
                                                    lineNumber: 168,
                                                    columnNumber: 33
                                                }, this)),
                                            !hotspots.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-amber-200/70",
                                                children: "Waiting for live readings…"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/analytics/page.js",
                                                lineNumber: 187,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/analytics/page.js",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/analytics/page.js",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/analytics/page.js",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$TrafficChatbot$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            criticalSegments: hotspots
                        }, void 0, false, {
                            fileName: "[project]/src/app/analytics/page.js",
                            lineNumber: 194,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/analytics/page.js",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/analytics/page.js",
                lineNumber: 102,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/analytics/page.js",
        lineNumber: 100,
        columnNumber: 9
    }, this);
}
function getHotspots(readings) {
    return (readings || []).filter((s)=>(s.congestion_pct ?? 0) > 65).sort((a, b)=>b.congestion_pct - a.congestion_pct).slice(0, 5);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e848e68e._.js.map