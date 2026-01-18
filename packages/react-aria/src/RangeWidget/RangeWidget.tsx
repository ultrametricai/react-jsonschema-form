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
    <div className="rjsf-range-widget">
      <AriaSlider
        value={currentValue}
        onChange={onChange}
        minValue={min}
        maxValue={max}
        step={step}
        isDisabled={disabled || readonly}
        aria-describedby={ariaDescribedByIds(id)}
        aria-label={label || id}
      >
        <SliderOutput>
          {({ state }) =>
            state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')}
        </SliderOutput>
        <SliderTrack>
          {({ state, isDisabled }) => (<>
            <div className="track inset" data-disabled={isDisabled || undefined}>
              {state.values.length === 1
                ? <div className="fill" style={{'--size': state.getThumbPercent(0) * 100 + '%'} as any} />
                : state.values.length === 2
                  ? <div className="fill" style={{'--start': state.getThumbPercent(0) * 100 + '%', '--size': (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + '%'} as any} />
                  : null}
            </div>
            {state.values.map((_, i) => (
              <SliderThumb key={i} index={i} className="react-aria-SliderThumb indicator" />
            ))}
          </>)}
        </SliderTrack>
      </AriaSlider>
    </div>
  );
}
