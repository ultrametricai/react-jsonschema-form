import { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps, ListBoxProps, ValidationResult } from 'react-aria-components';
export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, 'children'> {
    label?: string;
    description?: string | null;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children: React.ReactNode | ((item: T) => React.ReactNode);
    placeholder?: string;
}
export declare function ComboBox<T extends object>({ label, description, errorMessage, children, placeholder, ...props }: ComboBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxListBox<T extends object>(props: ListBoxProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function ComboBoxItem(props: ListBoxItemProps): import("react/jsx-runtime").JSX.Element;
