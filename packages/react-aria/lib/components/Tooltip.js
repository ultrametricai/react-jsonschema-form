'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OverlayArrow, Tooltip as AriaTooltip, TooltipTrigger as AriaTooltipTrigger, } from 'react-aria-components';
export function Tooltip({ children, ...props }) {
    return (_jsxs(AriaTooltip, { ...props, className: "react-aria-Tooltip", children: [_jsx(OverlayArrow, { className: "react-aria-OverlayArrow", children: _jsx("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: _jsx("path", { d: "M0 0 L4 4 L8 0" }) }) }), children] }));
}
export function TooltipTrigger(props) {
    return _jsx(AriaTooltipTrigger, { ...props });
}
//# sourceMappingURL=Tooltip.js.map