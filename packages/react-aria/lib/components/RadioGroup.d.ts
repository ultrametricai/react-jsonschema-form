import { RadioGroupProps as AriaRadioGroupProps, ValidationResult, RadioProps as AriaRadioProps } from 'react-aria-components';
export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'children'> {
    children?: React.ReactNode;
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    orientation?: 'horizontal' | 'vertical';
}
export type RadioProps = AriaRadioProps;
export declare function RadioGroup({ label, description, errorMessage, children, orientation, ...props }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export declare function Radio(props: RadioProps): import("react/jsx-runtime").JSX.Element;
