import { NumberFieldProps as AriaNumberFieldProps, ValidationResult } from 'react-aria-components';
export interface NumberFieldProps extends AriaNumberFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    placeholder?: string;
}
export declare function NumberField({ label, description, errorMessage, placeholder, ...props }: NumberFieldProps): import("react/jsx-runtime").JSX.Element;
