import { ListBoxItemProps, SelectProps as AriaSelectProps, ValidationResult, ListBoxProps } from 'react-aria-components';
export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
    placeholder?: string;
}
export declare function Select<T extends object>({ label, description, errorMessage, children, items, placeholder, ...props }: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function SelectListBox<T extends object>(props: ListBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function SelectItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
export type SelectItemProps = ListBoxItemProps;
