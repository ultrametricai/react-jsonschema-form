import { ChangeEvent, FocusEvent } from "react";
import {
  ariaDescribedByIds,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import { Label, TextArea, TextField } from "react-aria-components";

type CustomWidgetProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
> = WidgetProps<T, S, F> & {
  options: any;
};

/** The `TextareaWidget` is a widget for rendering input fields as textarea.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function TextareaWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  id,
  htmlName,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  className,
  label,
  hideLabel,
  rawErrors = [],
}: CustomWidgetProps<T, S, F>) {
  const _onChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target }: FocusEvent<HTMLTextAreaElement>) =>
    onBlur(id, target && target.value);
  const _onFocus = ({ target }: FocusEvent<HTMLTextAreaElement>) =>
    onFocus(id, target && target.value);

  const hasError = rawErrors.length > 0;

  return (
    <TextField
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readonly}
      isInvalid={hasError}
      className={className || undefined}
    >
      {!hideLabel && label && (
        <Label>
          {label}
          {required ? <span className="rjsf-required">*</span> : null}
        </Label>
      )}
      <TextArea
        id={id}
        name={htmlName || id}
        placeholder={placeholder}
        value={value ?? ""}
        autoFocus={autofocus}
        rows={options.rows || 5}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        aria-describedby={ariaDescribedByIds(id)}
      />
    </TextField>
  );
}
