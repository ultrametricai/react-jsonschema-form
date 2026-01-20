import { TagGroupProps as AriaTagGroupProps, TagProps as AriaTagProps } from 'react-aria-components';
export interface TagGroupProps<T> extends Omit<AriaTagGroupProps, 'children'> {
    label?: string;
    description?: string;
    errorMessage?: string;
    items?: Iterable<T>;
    children?: React.ReactNode | ((item: T) => React.ReactNode);
}
export declare function TagGroup<T extends object>({ label, description, errorMessage, items, children, ...props }: TagGroupProps<T>): import("react/jsx-runtime").JSX.Element;
export interface TagProps extends AriaTagProps {
    children: React.ReactNode;
}
export declare function Tag({ children, ...props }: TagProps): import("react/jsx-runtime").JSX.Element;
