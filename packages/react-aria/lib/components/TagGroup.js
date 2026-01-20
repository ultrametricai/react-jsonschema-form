'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Tag as AriaTag, TagGroup as AriaTagGroup, TagList, Button, } from 'react-aria-components';
import { Label, Description } from './Form.js';
import { Text } from './Content.js';
export function TagGroup({ label, description, errorMessage, items, children, ...props }) {
    return (_jsxs(AriaTagGroup, { ...props, className: "react-aria-TagGroup", children: [label && _jsx(Label, { children: label }), _jsx(TagList, { items: items, className: "react-aria-TagList", children: children }), description && _jsx(Description, { children: description }), errorMessage && _jsx(Text, { slot: "errorMessage", children: errorMessage })] }));
}
export function Tag({ children, ...props }) {
    const textValue = typeof children === 'string' ? children : undefined;
    return (_jsx(AriaTag, { textValue: textValue, ...props, className: "react-aria-Tag", children: ({ allowsRemoving }) => (_jsxs(_Fragment, { children: [children, allowsRemoving && (_jsx(Button, { slot: "remove", className: "react-aria-Tag-remove", children: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: _jsx("path", { d: "M5 5 L13 13 M13 5 L5 13", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }))] })) }));
}
//# sourceMappingURL=TagGroup.js.map