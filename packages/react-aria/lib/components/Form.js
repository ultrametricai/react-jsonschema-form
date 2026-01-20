'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Form as RACForm, Label as RACLabel, FieldError as RACFieldError, Button, Text, } from 'react-aria-components';
export function Form(props) {
    return _jsx(RACForm, { ...props });
}
export function Label(props) {
    return _jsx(RACLabel, { ...props, className: "react-aria-Label" });
}
export function FieldError(props) {
    return _jsx(RACFieldError, { ...props, className: "react-aria-FieldError" });
}
export function Description(props) {
    return _jsx(Text, { slot: "description", ...props, className: "react-aria-Description" });
}
export function FieldButton(props) {
    return _jsx(Button, { ...props, className: "react-aria-FieldButton" });
}
//# sourceMappingURL=Form.js.map