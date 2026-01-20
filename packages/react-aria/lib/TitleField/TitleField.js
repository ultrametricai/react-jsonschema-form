import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getUiOptions, } from "@rjsf/utils";
import { Separator } from "react-aria-components";
/** The `TitleField` is the template to use to render the title of a field
 *
 * @param props - The `TitleFieldProps` for this component
 */
export default function TitleField({ id, title, uiSchema, optionalDataControl }) {
    const uiOptions = getUiOptions(uiSchema);
    let heading = _jsx("h5", { className: "react-aria-title-heading", children: uiOptions.title || title });
    if (optionalDataControl) {
        heading = (_jsxs("div", { className: "react-aria-title-with-control", children: [_jsx("div", { className: "react-aria-title-heading-wrapper", children: heading }), _jsx("div", { className: "react-aria-title-control", children: optionalDataControl })] }));
    }
    return (_jsxs("div", { id: id, className: "react-aria-title-field", children: [heading, _jsx("div", { className: "react-aria-title-separator", children: _jsx(Separator, {}) })] }));
}
//# sourceMappingURL=TitleField.js.map