'use client';
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps,
  DateSegment as AriaDateSegment,
  DateSegmentProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components';
import { Label, FieldError, Description } from './Form';

export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  return (
    <AriaDateField {...props} className="react-aria-DateField">
      {label && <Label>{label}</Label>}
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}

export function DateInput(props: DateInputProps) {
  return <AriaDateInput {...props} className="react-aria-DateInput" />;
}

export function DateSegment(props: DateSegmentProps) {
  return <AriaDateSegment {...props} className="react-aria-DateSegment" />;
}

export type { DateInputProps, DateSegmentProps };
