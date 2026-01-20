import { ButtonProps as RACButtonProps } from 'react-aria-components';
interface ButtonProps extends RACButtonProps {
    /**
     * The visual style of the button.
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'quiet';
}
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
