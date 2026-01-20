'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select as AriaSelect, SelectValue, Button, } from 'react-aria-components';
import { DropdownItem, DropdownListBox } from './ListBox.js';
import { Popover } from './Popover.js';
import { Label, FieldError, Description } from './Form.js';
export function Select({ label, description, errorMessage, children, items, placeholder, ...props }) {
    return (_jsxs(AriaSelect, { ...props, className: "react-aria-Select", children: [label && _jsx(Label, { children: label }), _jsxs(Button, { className: "react-aria-Select-button", children: [_jsx(SelectValue, { className: "react-aria-SelectValue", children: ({ selectedText }) => selectedText || placeholder || 'Select...' }), _jsx("svg", { viewBox: "0 0 12 12", "aria-hidden": "true", className: "react-aria-Select-chevron", children: _jsx("path", { d: "M2 4 L6 8 L10 4" }) })] }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage }), _jsx(Popover, { hideArrow: true, className: "react-aria-Select-popover", children: _jsx(SelectListBox, { items: items, children: children }) })] }));
}
export function SelectListBox(props) {
    return _jsx(DropdownListBox, { ...props });
}
export function SelectItem(props) {
    return _jsx(DropdownItem, { ...props });
}
//# sourceMappingURL=Select.js.map