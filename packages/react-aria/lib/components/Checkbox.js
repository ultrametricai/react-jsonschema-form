'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox as AriaCheckbox, } from 'react-aria-components';
export function Checkbox({ children, ...props }) {
    return (_jsx(AriaCheckbox, { ...props, className: "react-aria-Checkbox", children: ({ isIndeterminate }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "react-aria-Checkbox-indicator", children: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: isIndeterminate ? (_jsx("rect", { x: 1, y: 7.5, width: 16, height: 3 })) : (_jsx("polyline", { points: "2 9 7 14 16 4" })) }, isIndeterminate ? 'indeterminate' : 'check') }), children] })) }));
}
//# sourceMappingURL=Checkbox.js.map