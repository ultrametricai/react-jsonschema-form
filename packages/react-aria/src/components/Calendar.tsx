'use client';
import {
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarProps as AriaCalendarProps,
  DateValue,
  CalendarCellProps,
  CalendarGridProps,
  Button,
  Heading,
} from 'react-aria-components';
import { Text } from './Content';

export interface CalendarProps<T extends DateValue> extends AriaCalendarProps<T> {
  errorMessage?: string;
}

export function Calendar<T extends DateValue>({
  errorMessage,
  ...props
}: CalendarProps<T>) {
  return (
    <AriaCalendar {...props} className="react-aria-Calendar">
      <header className="react-aria-Calendar-header">
        <Button slot="previous" className="react-aria-Calendar-nav">
          <svg viewBox="0 0 18 18" aria-hidden="true">
            <path d="M11 4 L6 9 L11 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
        <Heading className="react-aria-Calendar-heading" />
        <Button slot="next" className="react-aria-Calendar-nav">
          <svg viewBox="0 0 18 18" aria-hidden="true">
            <path d="M7 4 L12 9 L7 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </header>
      <CalendarGrid>
        {(date) => <CalendarCell date={date} />}
      </CalendarGrid>
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </AriaCalendar>
  );
}

export function CalendarCell(props: CalendarCellProps) {
  return <AriaCalendarCell {...props} className="react-aria-CalendarCell" />;
}

export function CalendarGrid(props: CalendarGridProps) {
  return <AriaCalendarGrid {...props} className="react-aria-CalendarGrid" />;
}

export type { CalendarCellProps, CalendarGridProps };
