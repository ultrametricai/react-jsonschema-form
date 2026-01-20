import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ariaDescribedByIds, } from "@rjsf/utils";
import { TextArea, TextField as AriaTextField } from "react-aria-components";
import { Label } from "../components/Form.js";
/** The `TextareaWidget` is a widget for rendering input fields as textarea.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function TextareaWidget({ id, htmlName, placeholder, value, required, disabled, autofocus, readonly, onBlur, onFocus, onChange, options, label, hideLabel, rawErrors = [], }) {
    const _onChange = ({ target: { value } }) => onChange(value === "" ? options.emptyValue : value);
    const _onBlur = ({ target }) => onBlur(id, target && target.value);
    const _onFocus = ({ target }) => onFocus(id, target && target.value);
    const hasError = rawErrors.length > 0;
    return (_jsxs(AriaTextField, { className: "react-aria-TextField", isRequired: required, isDisabled: disabled, isReadOnly: readonly, isInvalid: hasError, children: [!hideLabel && label && (_jsxs(Label, { children: [label, required ? _jsx("span", { className: "react-aria-required", children: "*" }) : null] })), _jsx(TextArea, { id: id, name: htmlName || id, className: "react-aria-TextArea", placeholder: placeholder, value: value !== null && value !== void 0 ? value : "", autoFocus: autofocus, rows: options.rows || 5, onChange: _onChange, onBlur: _onBlur, onFocus: _onFocus, "aria-describedby": ariaDescribedByIds(id) })] }));
}
//# sourceMappingURL=TextareaWidget.js.map