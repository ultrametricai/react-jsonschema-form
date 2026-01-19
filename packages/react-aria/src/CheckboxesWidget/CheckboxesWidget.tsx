import {
  ariaDescribedByIds,
  FormContextType,
  optionId,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";
import { Checkbox } from "../components/Checkbox";

/** The `CheckboxesWidget` is a widget for rendering checkbox groups.
 *  It is typically used to represent an array of enums.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function CheckboxesWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  id,
  htmlName,
  disabled,
  options,
  value,
  autofocus,
  readonly,
  required,
  label,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, inline } = options;

  // Convert values to strings for CheckboxGroup (it expects string[])
  const selectedValues = Array.isArray(value)
    ? value.map(v => String(v))
    : value !== undefined ? [String(value)] : [];

  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);

  // Handle selection changes from CheckboxGroup
  const handleChange = (newValues: string[]) => {
    // Map string values back to original enum values
    const result = newValues.map(strVal => {
      const option = enumOptions?.find(opt => String(opt.value) === strVal);
      return option?.value;
    }).filter(v => v !== undefined);
    onChange(result);
  };

  return (
    <AriaCheckboxGroup
      className="react-aria-CheckboxGroup"
      aria-describedby={ariaDescribedByIds(id)}
      aria-label={label || id}
      data-orientation={inline ? "horizontal" : "vertical"}
      value={selectedValues}
      onChange={handleChange}
      isDisabled={disabled || readonly}
      isRequired={required}
    >
      {Array.isArray(enumOptions) &&
        enumOptions.map((option, index: number) => {
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;
          const indexOptionId = optionId(id, index);

          return (
            <Checkbox
              key={indexOptionId}
              id={indexOptionId}
              name={htmlName || id}
              value={String(option.value)}
              isDisabled={itemDisabled}
              autoFocus={autofocus && index === 0}
              onBlur={_onBlur as any}
              onFocus={_onFocus as any}
            >
              {option.label}
            </Checkbox>
          );
        })}
    </AriaCheckboxGroup>
  );
}
