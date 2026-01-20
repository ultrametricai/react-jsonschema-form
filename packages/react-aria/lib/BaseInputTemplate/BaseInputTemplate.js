import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ariaDescribedByIds, examplesId, getInputProps, } from "@rjsf/utils";
import { useCallback } from "react";
import { Input, TextField as AriaTextField } from "react-aria-components";
import { Label } from "../components/Form.js";
/** The `BaseInputTemplate` is the template to use to render the basic `<input>` component for the react-aria theme.
 * It is used as the template for rendering many of the <input> based widgets that differ by `type` and callbacks only.
 * It can be customized/overridden for other themes or individual implementations as needed.
 *
 * @param props - The `WidgetProps` for this template
 */
export default function BaseInputTemplate({ id, htmlName, placeholder, required, readonly, disabled, type, value, onChange, onChangeOverride, onBlur, onFocus, autofocus, options, schema, rawErrors = [], children, extraProps, registry, label, hideLabel, }) {
    const { ClearButton } = registry.templates.ButtonTemplates;
    const inputProps = {
        ...extraProps,
        ...getInputProps(schema, type, options),
    };
    const _onChange = ({ target: { value } }) => onChange(value === "" ? options.emptyValue : value);
    const _onBlur = ({ target }) => onBlur(id, target && target.value);
    const _onFocus = ({ target }) => onFocus(id, target && target.value);
    const _onClear = useCallback((e) => {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        onChange((_a = options.emptyValue) !== null && _a !== void 0 ? _a : "");
    }, [onChange, options.emptyValue]);
    const hasError = rawErrors.length > 0;
    return (_jsxs(AriaTextField, { className: "react-aria-TextField", isRequired: required, isDisabled: disabled, isReadOnly: readonly, isInvalid: hasError, children: [!hideLabel && label && (_jsxs(Label, { children: [label, required ? _jsx("span", { className: "react-aria-required", children: "*" }) : null] })), _jsx(Input, { id: id, name: htmlName || id, className: "react-aria-Input", type: type, placeholder: placeholder, autoFocus: autofocus, list: schema.examples ? examplesId(id) : undefined, ...inputProps, value: value || value === 0 ? value : "", onChange: onChangeOverride || _onChange, onBlur: _onBlur, onFocus: _onFocus, "aria-describedby": ariaDescribedByIds(id, !!schema.examples) }), options.allowClearTextInputs && !readonly && !disabled && value && (_jsx(ClearButton, { onClick: _onClear, registry: registry })), children, Array.isArray(schema.examples) ? (_jsx("datalist", { id: examplesId(id), children: schema.examples
                    .concat(schema.default && !schema.examples.includes(schema.default)
                    ? [schema.default]
                    : [])
                    .map((example) => {
                    return _jsx("option", { value: example }, example);
                }) })) : null] }));
}
//# sourceMappingURL=BaseInputTemplate.js.map