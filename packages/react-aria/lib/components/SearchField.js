'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Input, SearchField as AriaSearchField, } from 'react-aria-components';
import { Label, FieldError, Description } from './Form.js';
export function SearchField({ label, description, errorMessage, placeholder, ...props }) {
    return (_jsxs(AriaSearchField, { ...props, className: "react-aria-SearchField", children: [label && _jsx(Label, { children: label }), _jsxs("div", { className: "react-aria-SearchField-wrapper", children: [_jsxs("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-SearchField-icon", children: [_jsx("circle", { cx: "7", cy: "7", r: "5", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M11 11 L15 15", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }), _jsx(Input, { placeholder: placeholder, className: "react-aria-Input" }), _jsx(Button, { className: "react-aria-SearchField-clear", children: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: _jsx("path", { d: "M5 5 L13 13 M13 5 L5 13", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })] }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage })] }));
}
//# sourceMappingURL=SearchField.js.map