import { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';
export type CheckboxProps = Omit<AriaCheckboxProps, 'children'> & {
    children?: React.ReactNode;
};
export declare function Checkbox({ children, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
