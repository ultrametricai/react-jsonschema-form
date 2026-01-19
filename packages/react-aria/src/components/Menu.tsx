'use client';
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuTrigger as AriaMenuTrigger,
  SubmenuTrigger as AriaSubmenuTrigger,
  MenuProps as AriaMenuProps,
  MenuItemProps as AriaMenuItemProps,
  MenuSectionProps,
  MenuTriggerProps,
  SubmenuTriggerProps,
  composeRenderProps,
} from 'react-aria-components';
import { Text } from './Content';

export function MenuTrigger(props: MenuTriggerProps) {
  return <AriaMenuTrigger {...props} />;
}

export function Menu<T extends object>(props: AriaMenuProps<T>) {
  return <AriaMenu {...props} className="react-aria-Menu" />;
}

export interface MenuItemProps extends AriaMenuItemProps {
  children: React.ReactNode;
}

export function MenuItem(props: MenuItemProps) {
  const textValue =
    props.textValue || (typeof props.children === 'string' ? props.children : undefined);
  return (
    <AriaMenuItem {...props} textValue={textValue} className="react-aria-MenuItem">
      {composeRenderProps(props.children, (children, { selectionMode, isSelected, hasSubmenu }) => (
        <>
          {selectionMode === 'multiple' && isSelected && (
            <svg viewBox="0 0 18 18" aria-hidden="true" className="react-aria-MenuItem-check">
              <polyline points="2 9 7 14 16 4" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
          {selectionMode === 'single' && isSelected && (
            <svg viewBox="0 0 18 18" aria-hidden="true" className="react-aria-MenuItem-dot">
              <circle cx="9" cy="9" r="3" fill="currentColor" />
            </svg>
          )}
          {typeof children === 'string' ? <Text slot="label">{children}</Text> : children}
          {hasSubmenu && (
            <svg viewBox="0 0 18 18" aria-hidden="true" className="react-aria-MenuItem-chevron">
              <path d="M7 4 L12 9 L7 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </>
      ))}
    </AriaMenuItem>
  );
}

export function MenuSection<T extends object>(props: MenuSectionProps<T>) {
  return <AriaMenuSection {...props} className="react-aria-MenuSection" />;
}

export function SubmenuTrigger(props: SubmenuTriggerProps) {
  return <AriaSubmenuTrigger {...props} />;
}

export type MenuProps<T extends object> = AriaMenuProps<T>;
