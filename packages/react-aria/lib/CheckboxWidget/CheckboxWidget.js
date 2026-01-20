import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ariaDescribedByIds, descriptionId, getTemplate, labelValue, schemaRequiresTrueValue, } from "@rjsf/utils";
import { Checkbox } from "../components/Checkbox.js";
/** The `CheckBoxWidget` is a widget for rendering boolean properties.
 *  It is typically used to represent a boolean.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function CheckboxWidget(props) {
    const { id, htmlName, value, disabled, readonly, label, hideLabel, schema, autofocus, options, onChange, onBlur, onFocus, registry, uiSchema, } = props;
    // Because an unchecked checkbox will cause html5 validation to fail, only add
    // the "required" attribute if the field value must be "true", due to the
    // "const" or "enum" keywords
    const required = schemaRequiresTrueValue(schema);
    const DescriptionFieldTemplate = getTemplate("DescriptionFieldTemplate", registry, options);
    const _onChange = (isSelected) => onChange(isSelected);
    const _onBlur = () => onBlur(id, value);
    const _onFocus = () => onFocus(id, value);
    const description = options.description || schema.description;
    return (_jsxs("div", { className: "react-aria-CheckboxWidget", "aria-describedby": ariaDescribedByIds(id), "data-disabled": disabled || readonly || undefined, children: [!hideLabel && description && (_jsx(DescriptionFieldTemplate, { id: descriptionId(id), description: description, schema: schema, uiSchema: uiSchema, registry: registry })), _jsx(Checkbox, { id: id, name: htmlName || id, isSelected: typeof value === "undefined" ? false : Boolean(value), isRequired: required, isDisabled: disabled || readonly, autoFocus: autofocus, onChange: _onChange, onBlur: _onBlur, onFocus: _onFocus, "aria-label": hideLabel || !label ? label || id : undefined, children: labelValue(label, hideLabel || !label) })] }));
}
//# sourceMappingURL=CheckboxWidget.js.map