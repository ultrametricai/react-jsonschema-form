'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Group, Input, NumberField as AriaNumberField, Button, } from 'react-aria-components';
import { Label, FieldError, Description } from './Form.js';
export function NumberField({ label, description, errorMessage, placeholder, ...props }) {
    return (_jsxs(AriaNumberField, { ...props, className: "react-aria-NumberField", children: [label && _jsx(Label, { children: label }), _jsxs(Group, { className: "react-aria-NumberField-group", children: [_jsx(Input, { className: "react-aria-Input", placeholder: placeholder }), _jsx(Button, { slot: "decrement", className: "react-aria-NumberField-button", children: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: _jsx("path", { d: "M4 9 L14 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }), _jsx(Button, { slot: "increment", className: "react-aria-NumberField-button", children: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: _jsx("path", { d: "M9 4 L9 14 M4 9 L14 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })] }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage })] }));
}
//# sourceMappingURL=NumberField.js.map