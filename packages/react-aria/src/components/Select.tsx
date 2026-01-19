'use client';
import {
  ListBoxItemProps,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue,
  ValidationResult,
  ListBoxProps,
  Button,
} from 'react-aria-components';
import { DropdownItem, DropdownListBox } from './ListBox';
import { Popover } from './Popover';
import { Label, FieldError, Description } from './Form';

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  placeholder?: string;
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  placeholder,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect {...props} className="react-aria-Select">
      {label && <Label>{label}</Label>}
      <Button className="react-aria-Select-button">
        <SelectValue className="react-aria-SelectValue">
          {({ selectedText }) => selectedText || placeholder || 'Select...'}
        </SelectValue>
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="react-aria-Select-chevron"
        >
          <path d="M2 4 L6 8 L10 4" />
        </svg>
      </Button>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover hideArrow className="react-aria-Select-popover">
        <SelectListBox items={items}>{children}</SelectListBox>
      </Popover>
    </AriaSelect>
  );
}

export function SelectListBox<T extends object>(props: ListBoxProps<T>) {
  return <DropdownListBox {...props} />;
}

export function SelectItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />;
}

export type SelectItemProps = ListBoxItemProps;
