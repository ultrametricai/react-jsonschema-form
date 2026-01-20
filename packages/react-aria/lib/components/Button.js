'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button as RACButton, composeRenderProps } from 'react-aria-components';
export function Button(props) {
    return (_jsx(RACButton, { ...props, className: "react-aria-Button", "data-variant": props.variant || 'primary', children: composeRenderProps(props.children, (children, { isPending }) => (_jsxs(_Fragment, { children: [!isPending && children, isPending && _jsx("span", { className: "react-aria-Button-spinner", children: "..." })] }))) }));
}
//# sourceMappingURL=Button.js.map