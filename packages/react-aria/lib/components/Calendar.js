'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar as AriaCalendar, CalendarCell as AriaCalendarCell, CalendarGrid as AriaCalendarGrid, Button, Heading, } from 'react-aria-components';
import { Text } from './Content.js';
export function Calendar({ errorMessage, ...props }) {
    return (_jsxs(AriaCalendar, { ...props, className: "react-aria-Calendar", children: [_jsxs("header", { className: "react-aria-Calendar-header", children: [_jsx(Button, { slot: "previous", className: "react-aria-Calendar-nav", children: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: _jsx("path", { d: "M11 4 L6 9 L11 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), _jsx(Heading, { className: "react-aria-Calendar-heading" }), _jsx(Button, { slot: "next", className: "react-aria-Calendar-nav", children: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", children: _jsx("path", { d: "M7 4 L12 9 L7 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })] }), _jsx(CalendarGrid, { children: (date) => _jsx(CalendarCell, { date: date }) }), errorMessage && _jsx(Text, { slot: "errorMessage", children: errorMessage })] }));
}
export function CalendarCell(props) {
    return _jsx(AriaCalendarCell, { ...props, className: "react-aria-CalendarCell" });
}
export function CalendarGrid(props) {
    return _jsx(AriaCalendarGrid, { ...props, className: "react-aria-CalendarGrid" });
}
//# sourceMappingURL=Calendar.js.map