'use client';
import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxSection as AriaListBoxSection,
  composeRenderProps,
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  ListBoxSectionProps as AriaListBoxSectionProps,
  Text,
} from 'react-aria-components';

export type ListBoxProps<T extends object> = AriaListBoxProps<T>;
export type ListBoxItemProps = AriaListBoxItemProps;
export type ListBoxSectionProps<T extends object> = AriaListBoxSectionProps<T>;

export function ListBox<T extends object>({ children, ...props }: ListBoxProps<T>) {
  return <AriaListBox {...props} className="react-aria-ListBox">{children}</AriaListBox>;
}

export function ListBoxItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue || (typeof props.children === 'string' ? props.children : undefined);
  return (
    <AriaListBoxItem {...props} textValue={textValue} className="react-aria-ListBoxItem">
      {composeRenderProps(props.children, (children) =>
        typeof children === 'string' ? <Text slot="label">{children}</Text> : children
      )}
    </AriaListBoxItem>
  );
}

export function ListBoxSection<T extends object>(props: ListBoxSectionProps<T>) {
  return <AriaListBoxSection {...props} className="react-aria-ListBoxSection" />;
}

export function DropdownListBox<T extends object>(props: ListBoxProps<T>) {
  return <AriaListBox {...props} className="react-aria-DropdownListBox" />;
}

export function DropdownItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue || (typeof props.children === 'string' ? props.children : undefined);
  return (
    <ListBoxItem {...props} textValue={textValue} className="react-aria-DropdownItem">
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          {isSelected && (
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
              className="react-aria-DropdownItem-check"
            >
              <polyline points="2 9 7 14 16 4" />
            </svg>
          )}
          {typeof children === 'string' ? <Text slot="label">{children}</Text> : children}
        </>
      ))}
    </ListBoxItem>
  );
}
