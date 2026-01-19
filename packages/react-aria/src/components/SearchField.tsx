'use client';
import {
  Button,
  Input,
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult,
} from 'react-aria-components';
import { Label, FieldError, Description } from './Form';

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export function SearchField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField {...props} className="react-aria-SearchField">
      {label && <Label>{label}</Label>}
      <div className="react-aria-SearchField-wrapper">
        <svg viewBox="0 0 18 18" aria-hidden="true" className="react-aria-SearchField-icon">
          <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11 L15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <Input placeholder={placeholder} className="react-aria-Input" />
        <Button className="react-aria-SearchField-clear">
          <svg viewBox="0 0 18 18" aria-hidden="true">
            <path d="M5 5 L13 13 M13 5 L5 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Button>
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  );
}
