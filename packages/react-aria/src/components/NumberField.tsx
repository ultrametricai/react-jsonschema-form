'use client';
import {
  Group,
  Input,
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  ValidationResult,
  Button,
} from 'react-aria-components';
import { Label, FieldError, Description } from './Form';

export interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export function NumberField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: NumberFieldProps) {
  return (
    <AriaNumberField {...props} className="react-aria-NumberField">
      {label && <Label>{label}</Label>}
      <Group className="react-aria-NumberField-group">
        <Input className="react-aria-Input" placeholder={placeholder} />
        <Button slot="decrement" className="react-aria-NumberField-button">
          <svg viewBox="0 0 18 18" aria-hidden="true">
            <path d="M4 9 L14 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Button>
        <Button slot="increment" className="react-aria-NumberField-button">
          <svg viewBox="0 0 18 18" aria-hidden="true">
            <path d="M9 4 L9 14 M4 9 L14 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Button>
      </Group>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  );
}
