'use client';
import {
  Slider as AriaSlider,
  SliderOutput,
  SliderProps as AriaSliderProps,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';
import { Label } from './Form';

export interface SliderProps<T> extends AriaSliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

export function Slider<T extends number | number[]>({
  label,
  thumbLabels,
  ...props
}: SliderProps<T>) {
  return (
    <AriaSlider {...props} className="react-aria-Slider">
      {label && <Label>{label}</Label>}
      <SliderOutput className="react-aria-SliderOutput">
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')
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
                // Single thumb, render fill from the start
                <div
                  className="react-aria-SliderTrack-fill"
                  style={
                    { '--fill-size': state.getThumbPercent(0) * 100 + '%' } as React.CSSProperties
                  }
                />
              ) : state.values.length === 2 ? (
                // Range slider, render fill between the thumbs
                <div
                  className="react-aria-SliderTrack-fill"
                  style={
                    {
                      '--fill-start': state.getThumbPercent(0) * 100 + '%',
                      '--fill-size':
                        (state.getThumbPercent(1) - state.getThumbPercent(0)) * 100 + '%',
                    } as React.CSSProperties
                  }
                />
              ) : null}
            </div>
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
                className="react-aria-SliderThumb"
              />
            ))}
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
}
