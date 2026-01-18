import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

/** The `SelectWidget` is a widget for rendering dropdowns.
 *  It is typically used with string properties constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function SelectWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  id,
  options,
  required,
  disabled,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  defaultValue,
  placeholder,
  rawErrors = [],
  className,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, emptyValue: optEmptyValue } = options;

  const _onFocus = () => {
    onFocus(id, enumOptionsValueForIndex<S>(value, enumOptions, optEmptyValue));
  };

  const _onBlur = () => {
    onBlur(id, enumOptionsValueForIndex<S>(value, enumOptions, optEmptyValue));
  };

  const hasError = rawErrors.length > 0;

  // For multiple select, we would need a different approach
  // React Aria doesn't have a built-in multi-select component
  // For now, we'll use native select for multiple
  if (multiple) {
    return (
      <div className="rjsf-select-widget rjsf-select-multiple">
        <select
          id={id}
          multiple
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          value={
            Array.isArray(value)
              ? value.map((v) =>
                  enumOptionsIndexForValue<S>(v, enumOptions, false)?.toString() || "",
                ).filter(Boolean)
              : []
          }
          onChange={(e) => {
            const selectedOptions = Array.from(e.target.selectedOptions).map(
              (opt) => opt.value,
            );
            onChange(
              enumOptionsValueForIndex<S>(
                selectedOptions,
                enumOptions,
                optEmptyValue,
              ),
            );
          }}
          onFocus={_onFocus}
          onBlur={_onBlur}
          className={`rjsf-select ${hasError ? "rjsf-select-error" : ""} ${className || ""}`}
          aria-describedby={ariaDescribedByIds(id)}
        >
          {Array.isArray(enumOptions) &&
            enumOptions.map((option, index) => {
              const itemDisabled =
                Array.isArray(enumDisabled) &&
                enumDisabled.includes(option.value);
              return (
                <option
                  key={index}
                  value={index.toString()}
                  disabled={itemDisabled}
                >
                  {option.label}
                </option>
              );
            })}
        </select>
      </div>
    );
  }

  const selectedIndex = enumOptionsIndexForValue<S>(
    value ?? defaultValue,
    enumOptions,
    false,
  );

  return (
    <div className="rjsf-select-widget">
      <Select
        id={id}
        isRequired={required}
        isDisabled={disabled || readonly}
        autoFocus={autofocus}
        selectedKey={selectedIndex !== undefined ? selectedIndex.toString() : null}
        onSelectionChange={(key) => {
          onChange(
            enumOptionsValueForIndex<S>(
              key as string,
              enumOptions,
              optEmptyValue,
            ),
          );
        }}
        onFocus={_onFocus}
        onBlur={_onBlur}
        aria-describedby={ariaDescribedByIds(id)}
        className={`rjsf-select ${hasError ? "rjsf-select-error" : ""} ${className || ""}`}
      >
        <Button className="rjsf-select-button">
          <SelectValue className="rjsf-select-value">
            {({ selectedText }) => selectedText || placeholder || "Select..."}
          </SelectValue>
          <span aria-hidden="true" className="rjsf-select-arrow">
            ▼
          </span>
        </Button>
        <Popover className="rjsf-select-popover">
          <ListBox className="rjsf-select-listbox">
            {Array.isArray(enumOptions) &&
              enumOptions.map((option, index) => {
                const itemDisabled =
                  Array.isArray(enumDisabled) &&
                  enumDisabled.includes(option.value);
                return (
                  <ListBoxItem
                    key={index}
                    id={index.toString()}
                    isDisabled={itemDisabled}
                    className="rjsf-select-option"
                  >
                    {option.label}
                  </ListBoxItem>
                );
              })}
          </ListBox>
        </Popover>
      </Select>
    </div>
  );
}
