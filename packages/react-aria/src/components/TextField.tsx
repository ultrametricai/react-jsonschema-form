'use client';
import {
  Input,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
  TextArea,
} from 'react-aria-components';
import { Label, FieldError, Description } from './Form';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export function TextField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField {...props} className="react-aria-TextField">
      {label && <Label>{label}</Label>}
      <Input className="react-aria-Input" placeholder={placeholder} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}

export interface TextAreaFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
  rows?: number;
}

export function TextAreaField({
  label,
  description,
  errorMessage,
  placeholder,
  rows = 5,
  ...props
}: TextAreaFieldProps) {
  return (
    <AriaTextField {...props} className="react-aria-TextField">
      {label && <Label>{label}</Label>}
      <TextArea className="react-aria-TextArea" placeholder={placeholder} rows={rows} />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
