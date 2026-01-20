import { CalendarProps as AriaCalendarProps, DateValue, CalendarCellProps, CalendarGridProps } from 'react-aria-components';
export interface CalendarProps<T extends DateValue> extends AriaCalendarProps<T> {
    errorMessage?: string;
}
export declare function Calendar<T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function CalendarCell(props: CalendarCellProps): import("react/jsx-runtime").JSX.Element;
export declare function CalendarGrid(props: CalendarGridProps): import("react/jsx-runtime").JSX.Element;
export type { CalendarCellProps, CalendarGridProps };
