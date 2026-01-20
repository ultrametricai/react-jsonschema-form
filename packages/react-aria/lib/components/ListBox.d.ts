import { ListBoxItemProps as AriaListBoxItemProps, ListBoxProps as AriaListBoxProps, ListBoxSectionProps as AriaListBoxSectionProps } from 'react-aria-components';
export type ListBoxProps<T extends object> = AriaListBoxProps<T>;
export type ListBoxItemProps = AriaListBoxItemProps;
export type ListBoxSectionProps<T extends object> = AriaListBoxSectionProps<T>;
export declare function ListBox<T extends object>({ children, ...props }: ListBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function ListBoxItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export declare function ListBoxSection<T extends object>(props: ListBoxSectionProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownListBox<T extends object>(props: ListBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function DropdownItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
