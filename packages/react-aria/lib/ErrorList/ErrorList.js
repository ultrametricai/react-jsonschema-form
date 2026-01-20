import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TranslatableString, } from "@rjsf/utils";
/** The `ErrorList` component is the template that renders the all the errors associated with the fields in the `Form`
 *
 * @param props - The `ErrorListProps` for this component
 */
export default function ErrorList({ errors, registry }) {
    const { translateString } = registry;
    return (_jsxs("div", { className: "react-aria-error-list", role: "alert", children: [_jsx("div", { className: "react-aria-error-list-title", children: translateString(TranslatableString.ErrorsLabel) }), _jsx("ul", { className: "react-aria-error-list-items", children: errors.map((error, i) => {
                    return (_jsx("li", { className: "react-aria-error-list-item", children: error.stack }, i));
                }) })] }));
}
//# sourceMappingURL=ErrorList.js.map