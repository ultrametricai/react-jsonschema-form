import { MenuProps as AriaMenuProps, MenuItemProps as AriaMenuItemProps, MenuSectionProps, MenuTriggerProps, SubmenuTriggerProps } from 'react-aria-components';
export declare function MenuTrigger(props: MenuTriggerProps): import("react/jsx-runtime").JSX.Element;
export declare function Menu<T extends object>(props: AriaMenuProps<T>): import("react/jsx-runtime").JSX.Element;
export interface MenuItemProps extends AriaMenuItemProps {
    children: React.ReactNode;
}
export declare function MenuItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export declare function MenuSection<T extends object>(props: MenuSectionProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function SubmenuTrigger(props: SubmenuTriggerProps): import("react/jsx-runtime").JSX.Element;
export type MenuProps<T extends object> = AriaMenuProps<T>;
