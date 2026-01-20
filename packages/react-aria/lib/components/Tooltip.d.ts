import { TooltipProps as AriaTooltipProps, TooltipTriggerComponentProps } from 'react-aria-components';
export interface TooltipProps extends Omit<AriaTooltipProps, 'children'> {
    children: React.ReactNode;
}
export declare function Tooltip({ children, ...props }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export declare function TooltipTrigger(props: TooltipTriggerComponentProps): import("react/jsx-runtime").JSX.Element;
export type { TooltipTriggerComponentProps as TooltipTriggerProps };
