import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ariaDescribedByIds, enumOptionsIndexForValue, enumOptionsValueForIndex, } from "@rjsf/utils";
import { Button, ListBox, ListBoxItem, Select as AriaSelect, SelectValue, } from "react-aria-components";
import { Popover } from "../components/Popover.js";
import { Label } from "../components/Form.js";
/** The `SelectWidget` is a widget for rendering dropdowns.
 *  It is typically used with string properties constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function SelectWidget({ id, options, label, required, disabled, readonly, value, multiple, autofocus, onChange, onBlur, onFocus, defaultValue, placeholder, rawErrors = [], }) {
    const { enumOptions, enumDisabled, emptyValue: optEmptyValue } = options;
    const _onFocus = () => {
        onFocus(id, enumOptionsValueForIndex(value, enumOptions, optEmptyValue));
    };
    const _onBlur = () => {
        onBlur(id, enumOptionsValueForIndex(value, enumOptions, optEmptyValue));
    };
    const hasError = rawErrors.length > 0;
    // For multiple select, we use native select (React Aria doesn't have built-in multi-select)
    if (multiple) {
        return (_jsxs("div", { className: "react-aria-Select", "data-multiple": true, children: [label && _jsx(Label, { children: label }), _jsx("select", { id: id, multiple: true, required: required, disabled: disabled || readonly, autoFocus: autofocus, value: Array.isArray(value)
                        ? value.map((v) => { var _a; return ((_a = enumOptionsIndexForValue(v, enumOptions, false)) === null || _a === void 0 ? void 0 : _a.toString()) || ""; }).filter(Boolean)
                        : [], onChange: (e) => {
                        const selectedOptions = Array.from(e.target.selectedOptions).map((opt) => opt.value);
                        onChange(enumOptionsValueForIndex(selectedOptions, enumOptions, optEmptyValue));
                    }, onFocus: _onFocus, onBlur: _onBlur, className: "react-aria-Select-native", "aria-describedby": ariaDescribedByIds(id), "data-invalid": hasError || undefined, children: Array.isArray(enumOptions) &&
                        enumOptions.map((option, index) => {
                            const itemDisabled = Array.isArray(enumDisabled) &&
                                enumDisabled.includes(option.value);
                            return (_jsx("option", { value: index.toString(), disabled: itemDisabled, children: option.label }, index));
                        }) })] }));
    }
    const selectedIndex = enumOptionsIndexForValue(value !== null && value !== void 0 ? value : defaultValue, enumOptions, false);
    return (_jsxs(AriaSelect, { className: "react-aria-Select", id: id, isRequired: required, isDisabled: disabled || readonly, isInvalid: hasError, autoFocus: autofocus, selectedKey: selectedIndex !== undefined ? selectedIndex.toString() : null, onSelectionChange: (key) => {
            onChange(enumOptionsValueForIndex(key, enumOptions, optEmptyValue));
        }, onFocus: _onFocus, onBlur: _onBlur, "aria-describedby": ariaDescribedByIds(id), children: [label && _jsx(Label, { children: label }), _jsxs(Button, { className: "react-aria-Select-button", children: [_jsx(SelectValue, { className: "react-aria-SelectValue", children: ({ selectedText }) => selectedText || placeholder || "Select..." }), _jsx("svg", { viewBox: "0 0 12 12", "aria-hidden": "true", className: "react-aria-Select-chevron", children: _jsx("path", { d: "M2 4 L6 8 L10 4" }) })] }), _jsx(Popover, { hideArrow: true, className: "react-aria-Select-popover", children: _jsx(ListBox, { className: "react-aria-ListBox", children: Array.isArray(enumOptions) &&
                        enumOptions.map((option, index) => {
                            const itemDisabled = Array.isArray(enumDisabled) &&
                                enumDisabled.includes(option.value);
                            return (_jsx(ListBoxItem, { id: index.toString(), isDisabled: itemDisabled, className: "react-aria-ListBoxItem", children: option.label }, index));
                        }) }) })] }));
}
//# sourceMappingURL=SelectWidget.js.map