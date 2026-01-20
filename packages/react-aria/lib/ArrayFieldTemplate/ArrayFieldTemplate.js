import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { buttonId, getTemplate, getUiOptions, } from "@rjsf/utils";
/** The `ArrayFieldTemplate` component is the template used to render all items in an array.
 *
 * @param props - The `ArrayFieldTemplateProps` props for the component
 */
export default function ArrayFieldTemplate(props) {
    const { canAdd, disabled, fieldPathId, uiSchema, items, optionalDataControl, onAddClick, readonly, registry, required, schema, title, } = props;
    const uiOptions = getUiOptions(uiSchema);
    const ArrayFieldDescriptionTemplate = getTemplate("ArrayFieldDescriptionTemplate", registry, uiOptions);
    const ArrayFieldTitleTemplate = getTemplate("ArrayFieldTitleTemplate", registry, uiOptions);
    const showOptionalDataControlInTitle = !readonly && !disabled;
    // Button templates are not overridden in the uiSchema
    const { ButtonTemplates: { AddButton }, } = registry.templates;
    return (_jsx("div", { className: "react-aria-array-field", children: _jsx("div", { className: "react-aria-array-field-inner", children: _jsxs("div", { className: "react-aria-array-field-content", children: [_jsx(ArrayFieldTitleTemplate, { fieldPathId: fieldPathId, title: uiOptions.title || title, schema: schema, uiSchema: uiSchema, required: required, registry: registry, optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : undefined }), _jsx(ArrayFieldDescriptionTemplate, { fieldPathId: fieldPathId, description: uiOptions.description || schema.description, schema: schema, uiSchema: uiSchema, registry: registry }), _jsxs("div", { className: "react-aria-array-item-list", children: [!showOptionalDataControlInTitle ? optionalDataControl : undefined, items, canAdd && (_jsx("div", { className: "react-aria-array-item-add-wrapper", children: _jsx(AddButton, { id: buttonId(fieldPathId, "add"), className: "react-aria-array-item-add", onClick: onAddClick, disabled: disabled || readonly, uiSchema: uiSchema, registry: registry }) }))] }, `array-item-list-${fieldPathId.$id}`)] }) }) }));
}
//# sourceMappingURL=ArrayFieldTemplate.js.map