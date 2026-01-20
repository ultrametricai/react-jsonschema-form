import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from "@rjsf/utils";
/**
 * A range widget component that renders a slider for number input
 */
export default function RangeWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({ value, readonly, disabled, schema, onChange, label, id, }: WidgetProps<T, S, F>): JSX.Element;
