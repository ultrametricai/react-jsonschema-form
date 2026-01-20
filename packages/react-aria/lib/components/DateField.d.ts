import { DateFieldProps as AriaDateFieldProps, DateInputProps, DateSegmentProps, DateValue, ValidationResult } from 'react-aria-components';
export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DateField<T extends DateValue>({ label, description, errorMessage, ...props }: DateFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export declare function DateInput(props: DateInputProps): import("react/jsx-runtime").JSX.Element;
export declare function DateSegment(props: DateSegmentProps): import("react/jsx-runtime").JSX.Element;
export type { DateInputProps, DateSegmentProps };
