'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ComboBox as AriaComboBox, Input, Button, } from 'react-aria-components';
import { Label, FieldError, Description } from './Form.js';
import { DropdownItem, DropdownListBox } from './ListBox.js';
import { Popover } from './Popover.js';
export function ComboBox({ label, description, errorMessage, children, placeholder, ...props }) {
    return (_jsxs(AriaComboBox, { ...props, className: "react-aria-ComboBox", children: [label && _jsx(Label, { children: label }), _jsxs("div", { className: "react-aria-ComboBox-field", children: [_jsx(Input, { className: "react-aria-Input", placeholder: placeholder }), _jsx(Button, { className: "react-aria-ComboBox-button", children: _jsx("svg", { viewBox: "0 0 12 12", "aria-hidden": "true", children: _jsx("path", { d: "M2 4 L6 8 L10 4", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })] }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage }), _jsx(Popover, { hideArrow: true, className: "react-aria-ComboBox-popover", children: _jsx(ComboBoxListBox, { children: children }) })] }));
}
export function ComboBoxListBox(props) {
    return _jsx(DropdownListBox, { ...props });
}
export function ComboBoxItem(props) {
    return _jsx(DropdownItem, { ...props });
}
//# sourceMappingURL=ComboBox.js.map