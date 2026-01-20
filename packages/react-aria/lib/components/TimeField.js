'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TimeField as AriaTimeField, } from 'react-aria-components';
import { Label, FieldError, Description } from './Form.js';
import { DateInput, DateSegment } from './DateField.js';
export function TimeField({ label, description, errorMessage, ...props }) {
    return (_jsxs(AriaTimeField, { ...props, className: "react-aria-TimeField", children: [label && _jsx(Label, { children: label }), _jsx(DateInput, { children: (segment) => _jsx(DateSegment, { segment: segment }) }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage })] }));
}
//# sourceMappingURL=TimeField.js.map