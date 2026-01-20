import { CheckboxGroupProps as AriaCheckboxGroupProps, ValidationResult } from 'react-aria-components';
export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
    children?: React.ReactNode;
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    orientation?: 'horizontal' | 'vertical';
}
export declare function CheckboxGroup({ label, description, errorMessage, children, orientation, ...props }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
