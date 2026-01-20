import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ariaDescribedByIds, rangeSpec, } from "@rjsf/utils";
import { Slider as AriaSlider, SliderOutput, SliderThumb, SliderTrack, } from "react-aria-components";
import { Label } from "../components/Form.js";
/**
 * A range widget component that renders a slider for number input
 */
export default function RangeWidget({ value, readonly, disabled, schema, onChange, label, id, }) {
    var _a;
    const { min = 0, max = 100, step } = rangeSpec(schema);
    const currentValue = (_a = value) !== null && _a !== void 0 ? _a : min;
    return (_jsxs(AriaSlider, { className: "react-aria-Slider", value: currentValue, onChange: onChange, minValue: min, maxValue: max, step: step, isDisabled: disabled || readonly, "aria-describedby": ariaDescribedByIds(id), "aria-label": label || id, children: [label && _jsx(Label, { children: label }), _jsx(SliderOutput, { className: "react-aria-SliderOutput", children: ({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ") }), _jsx(SliderTrack, { className: "react-aria-SliderTrack", children: ({ state, isDisabled }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "react-aria-SliderTrack-rail", "data-disabled": isDisabled || undefined, children: state.values.length === 1 ? (_jsx("div", { className: "react-aria-SliderTrack-fill", style: { "--fill-size": state.getThumbPercent(0) * 100 + "%" } })) : state.values.length === 2 ? (_jsx("div", { className: "react-aria-SliderTrack-fill", style: {
                                    "--fill-start": state.getThumbPercent(0) * 100 + "%",
                                    "--fill-size": (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + "%",
                                } })) : null }), state.values.map((_, i) => (_jsx(SliderThumb, { index: i, className: "react-aria-SliderThumb" }, i)))] })) })] }));
}
//# sourceMappingURL=RangeWidget.js.map