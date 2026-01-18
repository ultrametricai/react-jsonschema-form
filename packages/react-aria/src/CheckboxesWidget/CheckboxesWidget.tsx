import {
  ariaDescribedByIds,
  enumOptionsDeselectValue,
  enumOptionsIsSelected,
  enumOptionsSelectValue,
  FormContextType,
  optionId,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import { Checkbox, CheckboxGroup } from "react-aria-components";

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
  className,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, inline } = options;
  const checkboxesValues = Array.isArray(value) ? value : [value];

  const _onBlur = () => onBlur(id, checkboxesValues);
  const _onFocus = () => onFocus(id, checkboxesValues);

  return (
    <CheckboxGroup
      className={`rjsf-checkboxes-widget ${inline ? "rjsf-checkboxes-inline" : ""}`}
      aria-describedby={ariaDescribedByIds(id)}
      aria-label={label || id}
    >
      {Array.isArray(enumOptions) &&
        enumOptions.map((option, index: number) => {
          const checked = enumOptionsIsSelected<S>(
            option.value,
            checkboxesValues,
          );
          const itemDisabled =
            Array.isArray(enumDisabled) &&
            enumDisabled.indexOf(option.value) !== -1;
          const indexOptionId = optionId(id, index);

          return (
            <div className="rjsf-checkbox-item" key={indexOptionId}>
              <Checkbox
                id={indexOptionId}
                name={htmlName || id}
                isRequired={required}
                isDisabled={disabled || itemDisabled || readonly}
                onChange={(isSelected) => {
                  if (isSelected) {
                    onChange(
                      enumOptionsSelectValue<S>(
                        index,
                        checkboxesValues,
                        enumOptions,
                      ),
                    );
                  } else {
                    onChange(
                      enumOptionsDeselectValue<S>(
                        index,
                        checkboxesValues,
                        enumOptions,
                      ),
                    );
                  }
                }}
                className={`rjsf-checkbox ${className || ""}`}
                isSelected={checked}
                autoFocus={autofocus && index === 0}
                onBlur={_onBlur as any}
                onFocus={_onFocus as any}
              >
                {option.label}
              </Checkbox>
            </div>
          );
        })}
    </CheckboxGroup>
  );
}
