'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Slider as AriaSlider, SliderOutput, SliderThumb, SliderTrack, } from 'react-aria-components';
import { Label } from './Form.js';
export function Slider({ label, thumbLabels, ...props }) {
    return (_jsxs(AriaSlider, { ...props, className: "react-aria-Slider", children: [label && _jsx(Label, { children: label }), _jsx(SliderOutput, { className: "react-aria-SliderOutput", children: ({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ') }), _jsx(SliderTrack, { className: "react-aria-SliderTrack", children: ({ state, isDisabled }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "react-aria-SliderTrack-rail", "data-disabled": isDisabled || undefined, children: state.values.length === 1 ? (
                            // Single thumb, render fill from the start
                            _jsx("div", { className: "react-aria-SliderTrack-fill", style: { '--fill-size': state.getThumbPercent(0) * 100 + '%' } })) : state.values.length === 2 ? (
                            // Range slider, render fill between the thumbs
                            _jsx("div", { className: "react-aria-SliderTrack-fill", style: {
                                    '--fill-start': state.getThumbPercent(0) * 100 + '%',
                                    '--fill-size': (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + '%',
                                } })) : null }), state.values.map((_, i) => (_jsx(SliderThumb, { index: i, "aria-label": thumbLabels === null || thumbLabels === void 0 ? void 0 : thumbLabels[i], className: "react-aria-SliderThumb" }, i)))] })) })] }));
}
//# sourceMappingURL=Slider.js.map