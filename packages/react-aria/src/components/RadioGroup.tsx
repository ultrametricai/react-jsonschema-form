'use client';
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  ValidationResult,
  RadioProps as AriaRadioProps,
  Radio as AriaRadio,
  composeRenderProps,
} from 'react-aria-components';
import { Label, FieldError, Description } from './Form';

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  orientation?: 'horizontal' | 'vertical';
}

export type RadioProps = AriaRadioProps;

export function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  orientation = 'vertical',
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props} className="react-aria-RadioGroup" data-orientation={orientation}>
      {label && <Label>{label}</Label>}
      <div className="react-aria-RadioGroup-items">{children}</div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaRadioGroup>
  );
}

export function Radio(props: RadioProps) {
  return (
    <AriaRadio {...props} className="react-aria-Radio">
      {composeRenderProps(props.children, (children) => (
        <>
          <div className="react-aria-Radio-indicator" />
          {children}
        </>
      ))}
    </AriaRadio>
  );
}
