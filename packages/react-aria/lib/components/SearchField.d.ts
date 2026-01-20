import { SearchFieldProps as AriaSearchFieldProps, ValidationResult } from 'react-aria-components';
export interface SearchFieldProps extends AriaSearchFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    placeholder?: string;
}
export declare function SearchField({ label, description, errorMessage, placeholder, ...props }: SearchFieldProps): import("react/jsx-runtime").JSX.Element;
