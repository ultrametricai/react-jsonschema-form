import { PopoverProps as AriaPopoverProps } from 'react-aria-components';
export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
    children: React.ReactNode;
    hideArrow?: boolean;
}
export declare function Popover({ children, hideArrow, className, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
