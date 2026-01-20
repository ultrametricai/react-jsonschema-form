import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTemplate, getUiOptions, } from "@rjsf/utils";
/** The `ArrayFieldItemTemplate` component is the template used to render an items of an array.
 *
 * @param props - The `ArrayFieldItemTemplateProps` props for the component
 */
export default function ArrayFieldItemTemplate(props) {
    const { children, buttonsProps, displayLabel, hasDescription, hasToolbar, uiSchema, registry, } = props;
    const uiOptions = getUiOptions(uiSchema);
    const ArrayFieldItemButtonsTemplate = getTemplate("ArrayFieldItemButtonsTemplate", registry, uiOptions);
    return (_jsx("div", { className: "react-aria-array-item", children: _jsxs("div", { className: "react-aria-array-item-inner", children: [_jsx("div", { className: "react-aria-array-item-content", children: children }), _jsx("div", { className: "react-aria-array-item-buttons", children: hasToolbar && (_jsx("div", { className: "react-aria-array-item-buttons-inner", style: {
                            marginTop: displayLabel
                                ? hasDescription
                                    ? "-6px"
                                    : "22px"
                                : undefined,
                        }, children: _jsx(ArrayFieldItemButtonsTemplate, { ...buttonsProps }) })) })] }) }));
}
//# sourceMappingURL=ArrayFieldItemTemplate.js.map