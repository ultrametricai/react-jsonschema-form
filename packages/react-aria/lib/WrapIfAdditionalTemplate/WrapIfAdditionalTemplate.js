import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ADDITIONAL_PROPERTY_FLAG, buttonId, TranslatableString, } from "@rjsf/utils";
import { Input, Separator } from "react-aria-components";
/** The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are
 * part of an `additionalProperties` part of a schema.
 *
 * @param props - The `WrapIfAdditionalProps` for this component
 */
export default function WrapIfAdditionalTemplate({ classNames, style, children, disabled, id, label, displayLabel, onRemoveProperty, onKeyRenameBlur, rawDescription, readonly, required, schema, uiSchema, registry, }) {
    const { templates, translateString } = registry;
    // Button templates are not overridden in the uiSchema
    const { RemoveButton } = templates.ButtonTemplates;
    const keyLabel = translateString(TranslatableString.KeyLabel, [label]);
    const additional = ADDITIONAL_PROPERTY_FLAG in schema;
    if (!additional) {
        // Return children directly without wrapper for cleaner DOM structure
        return _jsx(_Fragment, { children: children });
    }
    const keyId = `${id}-key`;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: `react-aria-additional-property ${classNames || ""}`, style: style, children: [_jsx("div", { className: "react-aria-additional-property-key", children: _jsxs("div", { className: "react-aria-additional-property-key-wrapper", children: [displayLabel && (_jsx("label", { htmlFor: keyId, className: "react-aria-additional-property-label", children: keyLabel })), _jsx("div", { className: "react-aria-input-wrapper", children: _jsx(Input, { required: required, defaultValue: label, disabled: disabled || readonly, id: keyId, name: keyId, onBlur: !readonly ? onKeyRenameBlur : undefined, type: "text" }) }), !!rawDescription && (_jsx("span", { className: "react-aria-additional-property-spacer", children: "\u00A0" }))] }) }), _jsx("div", { className: "react-aria-additional-property-value", children: children }), _jsx("div", { className: "react-aria-additional-property-remove", children: _jsx(RemoveButton, { id: buttonId(id, "remove"), iconType: "block", className: "react-aria-object-property-remove", disabled: disabled || readonly, onClick: onRemoveProperty, uiSchema: uiSchema, registry: registry }) })] }), _jsx("div", { className: "react-aria-separator-wrapper", children: _jsx(Separator, {}) })] }));
}
//# sourceMappingURL=WrapIfAdditionalTemplate.js.map