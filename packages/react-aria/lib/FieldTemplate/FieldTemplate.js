import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTemplate, getUiOptions, } from "@rjsf/utils";
/** The `FieldTemplate` component is the template used by `SchemaField` to render any field. It renders the field
 * content, (label, description, children, errors and help) inside a `WrapIfAdditional` component.
 *
 * @param props - The `FieldTemplateProps` for this component
 */
export default function FieldTemplate({ id, children, displayLabel, errors, help, description, rawDescription, classNames, style, disabled, label, hidden, onKeyRename, onKeyRenameBlur, onRemoveProperty, readonly, required, schema, uiSchema, registry, }) {
    const uiOptions = getUiOptions(uiSchema);
    const WrapIfAdditionalTemplate = getTemplate("WrapIfAdditionalTemplate", registry, uiOptions);
    if (hidden) {
        return _jsx("div", { className: "react-aria-hidden", children: children });
    }
    const isCheckbox = uiOptions.widget === "checkbox";
    return (_jsxs(WrapIfAdditionalTemplate, { classNames: classNames, style: style, disabled: disabled, id: id, label: label, displayLabel: displayLabel, onKeyRename: onKeyRename, onKeyRenameBlur: onKeyRenameBlur, onRemoveProperty: onRemoveProperty, rawDescription: rawDescription, readonly: readonly, required: required, schema: schema, uiSchema: uiSchema, registry: registry, children: [children, displayLabel && rawDescription && !isCheckbox && (_jsx("span", { className: "react-aria-description", children: description })), errors, help] }));
}
//# sourceMappingURL=FieldTemplate.js.map