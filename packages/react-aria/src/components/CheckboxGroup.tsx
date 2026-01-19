'use client';
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  ValidationResult,
} from 'react-aria-components';
import { Label, FieldError, Description } from './Form';

export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  orientation?: 'horizontal' | 'vertical';
}

export function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  orientation = 'vertical',
  ...props
}: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup {...props} className="react-aria-CheckboxGroup" data-orientation={orientation}>
      {label && <Label>{label}</Label>}
      <div className="react-aria-CheckboxGroup-items">{children}</div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaCheckboxGroup>
  );
}
