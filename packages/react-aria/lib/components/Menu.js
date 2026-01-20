'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu as AriaMenu, MenuItem as AriaMenuItem, MenuSection as AriaMenuSection, MenuTrigger as AriaMenuTrigger, SubmenuTrigger as AriaSubmenuTrigger, composeRenderProps, } from 'react-aria-components';
import { Text } from './Content.js';
export function MenuTrigger(props) {
    return _jsx(AriaMenuTrigger, { ...props });
}
export function Menu(props) {
    return _jsx(AriaMenu, { ...props, className: "react-aria-Menu" });
}
export function MenuItem(props) {
    const textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
    return (_jsx(AriaMenuItem, { ...props, textValue: textValue, className: "react-aria-MenuItem", children: composeRenderProps(props.children, (children, { selectionMode, isSelected, hasSubmenu }) => (_jsxs(_Fragment, { children: [selectionMode === 'multiple' && isSelected && (_jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-check", children: _jsx("polyline", { points: "2 9 7 14 16 4", fill: "none", stroke: "currentColor", strokeWidth: "2" }) })), selectionMode === 'single' && isSelected && (_jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-dot", children: _jsx("circle", { cx: "9", cy: "9", r: "3", fill: "currentColor" }) })), typeof children === 'string' ? _jsx(Text, { slot: "label", children: children }) : children, hasSubmenu && (_jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-MenuItem-chevron", children: _jsx("path", { d: "M7 4 L12 9 L7 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }))] }))) }));
}
export function MenuSection(props) {
    return _jsx(AriaMenuSection, { ...props, className: "react-aria-MenuSection" });
}
export function SubmenuTrigger(props) {
    return _jsx(AriaSubmenuTrigger, { ...props });
}
//# sourceMappingURL=Menu.js.map