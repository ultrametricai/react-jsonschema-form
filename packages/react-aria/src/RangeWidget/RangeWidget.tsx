import {
  ariaDescribedByIds,
  FormContextType,
  rangeSpec,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";
import {
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { Label } from "../components/Form";

/**
 * A range widget component that renders a slider for number input
 */
export default function RangeWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  value,
  readonly,
  disabled,
  schema,
  onChange,
  label,
  id,
}: WidgetProps<T, S, F>): JSX.Element {
  const { min = 0, max = 100, step } = rangeSpec<S>(schema);
  const currentValue = (value as number) ?? min;

  return (
    <AriaSlider
      className="react-aria-Slider"
      value={currentValue}
      onChange={onChange}
      minValue={min}
      maxValue={max}
      step={step}
      isDisabled={disabled || readonly}
      aria-describedby={ariaDescribedByIds(id)}
      aria-label={label || id}
    >
      {label && <Label>{label}</Label>}
      <SliderOutput className="react-aria-SliderOutput">
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")
        }
      </SliderOutput>
      <SliderTrack className="react-aria-SliderTrack">
        {({ state, isDisabled }) => (
          <>
            <div
              className="react-aria-SliderTrack-rail"
              data-disabled={isDisabled || undefined}
            >
              {state.values.length === 1 ? (
                <div
                  className="react-aria-SliderTrack-fill"
                  style={
                    { "--fill-size": state.getThumbPercent(0) * 100 + "%" } as React.CSSProperties
                  }
                />
              ) : state.values.length === 2 ? (
                <div
                  className="react-aria-SliderTrack-fill"
                  style={
                    {
                      "--fill-start": state.getThumbPercent(0) * 100 + "%",
                      "--fill-size":
                        (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + "%",
                    } as React.CSSProperties
                  }
                />
              ) : null}
            </div>
            {state.values.map((_, i) => (
              <SliderThumb key={i} index={i} className="react-aria-SliderThumb" />
            ))}
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
}
