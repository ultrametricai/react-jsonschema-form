import {
  ariaDescribedByIds,
  enumOptionsValueForIndex,
  FormContextType,
  optionId,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import { Radio, RadioGroup } from "react-aria-components";

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
  className,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, emptyValue } = options;

  const _onChange = (value: string) =>
    onChange(enumOptionsValueForIndex<S>(value, enumOptions, emptyValue));
  const _onBlur = () => onBlur(id, value);
  const _onFocus = () => onFocus(id, value);

  const inline = Boolean(options && options.inline);

  return (
    <div className="rjsf-radio-widget">
      <RadioGroup
        value={value?.toString()}
        isRequired={required}
        isDisabled={disabled || readonly}
        onChange={_onChange}
        onBlur={_onBlur as any}
        onFocus={_onFocus as any}
        aria-describedby={ariaDescribedByIds(id)}
        aria-label={label || id}
        orientation={inline ? "horizontal" : "vertical"}
        className={`rjsf-radio-group ${inline ? "rjsf-radio-inline" : ""} ${className || ""}`}
      >
        {Array.isArray(enumOptions) &&
          enumOptions.map((option, index) => {
            const itemDisabled =
              Array.isArray(enumDisabled) &&
              enumDisabled.indexOf(option.value) !== -1;
            return (
              <div className="rjsf-radio-item" key={optionId(id, index)}>
                <Radio
                  value={index.toString()}
                  id={optionId(id, index)}
                  isDisabled={itemDisabled}
                  className="rjsf-radio"
                >
                  {option.label}
                </Radio>
              </div>
            );
          })}
      </RadioGroup>
    </div>
  );
}
