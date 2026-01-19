import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  FormContextType,
  optionId,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import { RadioGroup as AriaRadioGroup } from "react-aria-components";
import { Radio } from "../components/RadioGroup";

/** The `RadioWidget` is a widget for rendering a radio group.
 *  It is typically used with a string property constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function RadioWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  id,
  options,
  label,
  value,
  required,
  disabled,
  readonly,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, emptyValue } = options;

  const _onChange = (newValue: string) => {
    onChange(enumOptionsValueForIndex<S>(newValue, enumOptions, emptyValue));
  };
  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);

  const inline = Boolean(options && options.inline);
  const selectedIndex = enumOptionsIndexForValue<S>(value, enumOptions);
  const selectedValue = selectedIndex !== undefined ? String(selectedIndex) : undefined;

  return (
    <AriaRadioGroup
      className="react-aria-RadioGroup"
      value={selectedValue ?? null}
      isRequired={required}
      isDisabled={disabled || readonly}
      onChange={_onChange}
      onBlur={_onBlur as any}
      onFocus={_onFocus as any}
      aria-describedby={ariaDescribedByIds(id)}
      aria-label={label || id}
      orientation={inline ? "horizontal" : "vertical"}
      data-orientation={inline ? "horizontal" : "vertical"}
    >
      <div className="react-aria-RadioGroup-items">
        {Array.isArray(enumOptions) &&
          enumOptions.map((option, index) => {
            const itemDisabled =
              Array.isArray(enumDisabled) &&
              enumDisabled.indexOf(option.value) !== -1;
            return (
              <Radio
                value={String(index)}
                isDisabled={itemDisabled}
                key={optionId(id, index)}
              >
                {option.label}
              </Radio>
            );
          })}
      </div>
    </AriaRadioGroup>
  );
}
