'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DatePicker as AriaDatePicker, Group, Button, } from 'react-aria-components';
import { DateInput, DateSegment } from './DateField.js';
import { Label, FieldError, Description } from './Form.js';
import { Calendar } from './Calendar.js';
import { Popover } from './Popover.js';
export function DatePicker({ label, description, errorMessage, ...props }) {
    return (_jsxs(AriaDatePicker, { ...props, className: "react-aria-DatePicker", children: [label && _jsx(Label, { children: label }), _jsxs(Group, { className: "react-aria-DatePicker-group", children: [_jsx(DateInput, { children: (segment) => _jsx(DateSegment, { segment: segment }) }), _jsx(Button, { className: "react-aria-DatePicker-button", children: _jsxs("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: [_jsx("rect", { x: "2", y: "4", width: "14", height: "12", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M2 8 L16 8", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M6 2 L6 5 M12 2 L12 5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })] }) })] }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage }), _jsx(Popover, { hideArrow: true, className: "react-aria-DatePicker-popover", children: _jsx(Calendar, {}) })] }));
}
//# sourceMappingURL=DatePicker.js.map