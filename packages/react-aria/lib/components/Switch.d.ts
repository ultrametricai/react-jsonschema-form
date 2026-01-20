import { SwitchProps as AriaSwitchProps } from 'react-aria-components';
export interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
    children: React.ReactNode;
}
export declare function Switch({ children, ...props }: SwitchProps): import("react/jsx-runtime").JSX.Element;
