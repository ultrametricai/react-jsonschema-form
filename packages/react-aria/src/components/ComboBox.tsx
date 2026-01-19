'use client';
import {
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  Input,
  ListBoxItemProps,
  ListBoxProps,
  ValidationResult,
  Button,
} from 'react-aria-components';
import { Label, FieldError, Description } from './Form';
import { DropdownItem, DropdownListBox } from './ListBox';
import { Popover } from './Popover';

export interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, 'children'> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: React.ReactNode | ((item: T) => React.ReactNode);
  placeholder?: string;
}

export function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  placeholder,
  ...props
}: ComboBoxProps<T>) {
  return (
    <AriaComboBox {...props} className="react-aria-ComboBox">
      {label && <Label>{label}</Label>}
      <div className="react-aria-ComboBox-field">
        <Input className="react-aria-Input" placeholder={placeholder} />
        <Button className="react-aria-ComboBox-button">
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 4 L6 8 L10 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover hideArrow className="react-aria-ComboBox-popover">
        <ComboBoxListBox>{children}</ComboBoxListBox>
      </Popover>
    </AriaComboBox>
  );
}

export function ComboBoxListBox<T extends object>(props: ListBoxProps<T>) {
  return <DropdownListBox {...props} />;
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}
