'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { OverlayArrow, Popover as AriaPopover, } from 'react-aria-components';
export function Popover({ children, hideArrow, className, ...props }) {
    return (_jsx(AriaPopover, { ...props, className: `react-aria-Popover ${className || ''}`, children: ({ trigger }) => (_jsxs(_Fragment, { children: [!hideArrow && trigger !== 'MenuTrigger' && trigger !== 'SubmenuTrigger' && (_jsx(OverlayArrow, { className: "react-aria-OverlayArrow", children: _jsx("svg", { width: 12, height: 12, viewBox: "0 0 12 12", children: _jsx("path", { d: "M0 0 L6 6 L12 0" }) }) })), children] })) }));
}
//# sourceMappingURL=Popover.js.map