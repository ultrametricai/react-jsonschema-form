'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DateField as AriaDateField, DateInput as AriaDateInput, DateSegment as AriaDateSegment, } from 'react-aria-components';
import { Label, FieldError, Description } from './Form.js';
export function DateField({ label, description, errorMessage, ...props }) {
    return (_jsxs(AriaDateField, { ...props, className: "react-aria-DateField", children: [label && _jsx(Label, { children: label }), _jsx(DateInput, { children: (segment) => _jsx(DateSegment, { segment: segment }) }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage })] }));
}
export function DateInput(props) {
    return _jsx(AriaDateInput, { ...props, className: "react-aria-DateInput" });
}
export function DateSegment(props) {
    return _jsx(AriaDateSegment, { ...props, className: "react-aria-DateSegment" });
}
//# sourceMappingURL=DateField.js.map