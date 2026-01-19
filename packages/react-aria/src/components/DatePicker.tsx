'use client';
import {
  DatePicker as AriaDatePicker,
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  Group,
  ValidationResult,
  Button,
} from 'react-aria-components';
import { DateInput, DateSegment } from './DateField';
import { Label, FieldError, Description } from './Form';
import { Calendar } from './Calendar';
import { Popover } from './Popover';

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DatePickerProps<T>) {
  return (
    <AriaDatePicker {...props} className="react-aria-DatePicker">
      {label && <Label>{label}</Label>}
      <Group className="react-aria-DatePicker-group">
        <DateInput>
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <Button className="react-aria-DatePicker-button">
          <svg viewBox="0 0 18 18" aria-hidden="true">
            <rect x="2" y="4" width="14" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 8 L16 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 2 L6 5 M12 2 L12 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Button>
      </Group>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover hideArrow className="react-aria-DatePicker-popover">
        <Calendar />
      </Popover>
    </AriaDatePicker>
  );
}
