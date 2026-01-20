'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input, TextField as AriaTextField, TextArea, } from 'react-aria-components';
import { Label, FieldError, Description } from './Form.js';
export function TextField({ label, description, errorMessage, placeholder, ...props }) {
    return (_jsxs(AriaTextField, { ...props, className: "react-aria-TextField", children: [label && _jsx(Label, { children: label }), _jsx(Input, { className: "react-aria-Input", placeholder: placeholder }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage })] }));
}
export function TextAreaField({ label, description, errorMessage, placeholder, rows = 5, ...props }) {
    return (_jsxs(AriaTextField, { ...props, className: "react-aria-TextField", children: [label && _jsx(Label, { children: label }), _jsx(TextArea, { className: "react-aria-TextArea", placeholder: placeholder, rows: rows }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage })] }));
}
//# sourceMappingURL=TextField.js.map