'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch as AriaSwitch, } from 'react-aria-components';
export function Switch({ children, ...props }) {
    return (_jsx(AriaSwitch, { ...props, className: "react-aria-Switch", children: ({ isSelected, isDisabled }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "react-aria-Switch-track", children: _jsx("div", { className: "react-aria-Switch-handle", "data-selected": isSelected || undefined, "data-disabled": isDisabled || undefined }) }), children] })) }));
}
//# sourceMappingURL=Switch.js.map