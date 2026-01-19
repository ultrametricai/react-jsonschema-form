'use client';
import {
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagGroupProps as AriaTagGroupProps,
  TagList,
  TagProps as AriaTagProps,
  Button,
} from 'react-aria-components';
import { Label, Description } from './Form';
import { Text } from './Content';

export interface TagGroupProps<T>
  extends Omit<AriaTagGroupProps, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string;
  items?: Iterable<T>;
  children?: React.ReactNode | ((item: T) => React.ReactNode);
}

export function TagGroup<T extends object>({
  label,
  description,
  errorMessage,
  items,
  children,
  ...props
}: TagGroupProps<T>) {
  return (
    <AriaTagGroup {...props} className="react-aria-TagGroup">
      {label && <Label>{label}</Label>}
      <TagList items={items} className="react-aria-TagList">
        {children}
      </TagList>
      {description && <Description>{description}</Description>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaTagGroup>
  );
}

export interface TagProps extends AriaTagProps {
  children: React.ReactNode;
}

export function Tag({ children, ...props }: TagProps) {
  const textValue = typeof children === 'string' ? children : undefined;
  return (
    <AriaTag textValue={textValue} {...props} className="react-aria-Tag">
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove" className="react-aria-Tag-remove">
              <svg viewBox="0 0 18 18" aria-hidden="true">
                <path d="M5 5 L13 13 M13 5 L5 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Button>
          )}
        </>
      )}
    </AriaTag>
  );
}
