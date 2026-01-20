import { TextFieldProps as AriaTextFieldProps, ValidationResult } from 'react-aria-components';
export interface TextFieldProps extends AriaTextFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    placeholder?: string;
}
export declare function TextField({ label, description, errorMessage, placeholder, ...props }: TextFieldProps): import("react/jsx-runtime").JSX.Element;
export interface TextAreaFieldProps extends AriaTextFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    placeholder?: string;
    rows?: number;
}
export declare function TextAreaField({ label, description, errorMessage, placeholder, rows, ...props }: TextAreaFieldProps): import("react/jsx-runtime").JSX.Element;
