'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ListBox as AriaListBox, ListBoxItem as AriaListBoxItem, ListBoxSection as AriaListBoxSection, composeRenderProps, Text, } from 'react-aria-components';
export function ListBox({ children, ...props }) {
    return _jsx(AriaListBox, { ...props, className: "react-aria-ListBox", children: children });
}
export function ListBoxItem(props) {
    const textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
    return (_jsx(AriaListBoxItem, { ...props, textValue: textValue, className: "react-aria-ListBoxItem", children: composeRenderProps(props.children, (children) => typeof children === 'string' ? _jsx(Text, { slot: "label", children: children }) : children) }));
}
export function ListBoxSection(props) {
    return _jsx(AriaListBoxSection, { ...props, className: "react-aria-ListBoxSection" });
}
export function DropdownListBox(props) {
    return _jsx(AriaListBox, { ...props, className: "react-aria-DropdownListBox" });
}
export function DropdownItem(props) {
    const textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
    return (_jsx(ListBoxItem, { ...props, textValue: textValue, className: "react-aria-DropdownItem", children: composeRenderProps(props.children, (children, { isSelected }) => (_jsxs(_Fragment, { children: [isSelected && (_jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-DropdownItem-check", children: _jsx("polyline", { points: "2 9 7 14 16 4" }) })), typeof children === 'string' ? _jsx(Text, { slot: "label", children: children }) : children] }))) }));
}
//# sourceMappingURL=ListBox.js.map