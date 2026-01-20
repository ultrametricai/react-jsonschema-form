'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ProgressBar as AriaProgressBar, } from 'react-aria-components';
import { Label } from './Form.js';
export function ProgressBar({ label, ...props }) {
    return (_jsx(AriaProgressBar, { ...props, className: "react-aria-ProgressBar", children: ({ percentage, valueText, isIndeterminate }) => (_jsxs(_Fragment, { children: [label && _jsx(Label, { children: label }), _jsx("span", { className: "react-aria-ProgressBar-value", children: valueText }), _jsx("div", { className: "react-aria-ProgressBar-track", children: _jsx("div", { className: "react-aria-ProgressBar-fill", style: {
                            '--progress-percent': (isIndeterminate ? 100 : percentage) + '%',
                        } }) })] })) }));
}
//# sourceMappingURL=ProgressBar.js.map