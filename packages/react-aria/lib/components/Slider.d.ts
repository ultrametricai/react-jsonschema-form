import { SliderProps as AriaSliderProps } from 'react-aria-components';
export interface SliderProps<T> extends AriaSliderProps<T> {
    label?: string;
    thumbLabels?: string[];
}
export declare function Slider<T extends number | number[]>({ label, thumbLabels, ...props }: SliderProps<T>): import("react/jsx-runtime").JSX.Element;
