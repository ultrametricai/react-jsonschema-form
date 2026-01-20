'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckboxGroup as AriaCheckboxGroup, } from 'react-aria-components';
import { Label, FieldError, Description } from './Form.js';
export function CheckboxGroup({ label, description, errorMessage, children, orientation = 'vertical', ...props }) {
    return (_jsxs(AriaCheckboxGroup, { ...props, className: "react-aria-CheckboxGroup", "data-orientation": orientation, children: [label && _jsx(Label, { children: label }), _jsx("div", { className: "react-aria-CheckboxGroup-items", children: children }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage })] }));
}
//# sourceMappingURL=CheckboxGroup.js.map