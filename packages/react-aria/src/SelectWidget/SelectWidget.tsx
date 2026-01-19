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
  Select as AriaSelect,
  SelectValue,
} from "react-aria-components";
import { Popover } from "../components/Popover";

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
  label,
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
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, emptyValue: optEmptyValue } = options;

  const _onFocus = () => {
    onFocus(id, enumOptionsValueForIndex<S>(value, enumOptions, optEmptyValue));
  };

  const _onBlur = () => {
    onBlur(id, enumOptionsValueForIndex<S>(value, enumOptions, optEmptyValue));
  };

  const hasError = rawErrors.length > 0;

  // For multiple select, we use native select (React Aria doesn't have built-in multi-select)
  if (multiple) {
    return (
      <div className="react-aria-Select" data-multiple>
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
          className="react-aria-Select-native"
          aria-describedby={ariaDescribedByIds(id)}
          data-invalid={hasError || undefined}
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
    <AriaSelect
      className="react-aria-Select"
      id={id}
      isRequired={required}
      isDisabled={disabled || readonly}
      isInvalid={hasError}
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
      aria-label={label || id}
    >
      <Button className="react-aria-Select-button">
        <SelectValue className="react-aria-SelectValue">
          {({ selectedText }) => selectedText || placeholder || "Select..."}
        </SelectValue>
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="react-aria-Select-chevron"
        >
          <path d="M2 4 L6 8 L10 4" />
        </svg>
      </Button>
      <Popover hideArrow className="react-aria-Select-popover">
        <ListBox className="react-aria-ListBox">
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
                  className="react-aria-ListBoxItem"
                >
                  {option.label}
                </ListBoxItem>
              );
            })}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}
