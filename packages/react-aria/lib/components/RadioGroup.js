'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { RadioGroup as AriaRadioGroup, Radio as AriaRadio, composeRenderProps, } from 'react-aria-components';
import { Label, FieldError, Description } from './Form.js';
export function RadioGroup({ label, description, errorMessage, children, orientation = 'vertical', ...props }) {
    return (_jsxs(AriaRadioGroup, { ...props, className: "react-aria-RadioGroup", "data-orientation": orientation, children: [label && _jsx(Label, { children: label }), _jsx("div", { className: "react-aria-RadioGroup-items", children: children }), description && _jsx(Description, { children: description }), _jsx(FieldError, { children: errorMessage })] }));
}
export function Radio(props) {
    return (_jsx(AriaRadio, { ...props, className: "react-aria-Radio", children: composeRenderProps(props.children, (children) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "react-aria-Radio-indicator" }), children] }))) }));
}
//# sourceMappingURL=RadioGroup.js.map