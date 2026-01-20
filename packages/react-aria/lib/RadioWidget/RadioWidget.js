import { jsx as _jsx } from "react/jsx-runtime";
import { ariaDescribedByIds, enumOptionsIndexForValue, enumOptionsValueForIndex, optionId, } from "@rjsf/utils";
import { RadioGroup as AriaRadioGroup } from "react-aria-components";
import { Radio } from "../components/RadioGroup.js";
/** The `RadioWidget` is a widget for rendering a radio group.
 *  It is typically used with a string property constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function RadioWidget({ id, options, label, value, required, disabled, readonly, onChange, onBlur, onFocus, }) {
    const { enumOptions, enumDisabled, emptyValue } = options;
    const _onChange = (newValue) => {
        onChange(enumOptionsValueForIndex(newValue, enumOptions, emptyValue));
    };
    const _onBlur = () => onBlur(id, value);
    const _onFocus = () => onFocus(id, value);
    const inline = Boolean(options && options.inline);
    const selectedIndex = enumOptionsIndexForValue(value, enumOptions);
    const selectedValue = selectedIndex !== undefined ? String(selectedIndex) : undefined;
    return (_jsx(AriaRadioGroup, { className: "react-aria-RadioGroup", value: selectedValue !== null && selectedValue !== void 0 ? selectedValue : null, isRequired: required, isDisabled: disabled || readonly, onChange: _onChange, onBlur: _onBlur, onFocus: _onFocus, "aria-describedby": ariaDescribedByIds(id), "aria-label": label || id, orientation: inline ? "horizontal" : "vertical", "data-orientation": inline ? "horizontal" : "vertical", children: _jsx("div", { className: "react-aria-RadioGroup-items", children: Array.isArray(enumOptions) &&
                enumOptions.map((option, index) => {
                    const itemDisabled = Array.isArray(enumDisabled) &&
                        enumDisabled.indexOf(option.value) !== -1;
                    return (_jsx(Radio, { value: String(index), isDisabled: itemDisabled, children: option.label }, optionId(id, index)));
                }) }) }));
}
//# sourceMappingURL=RadioWidget.js.map