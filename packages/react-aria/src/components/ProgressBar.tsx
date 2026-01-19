'use client';
import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components';
import { Label } from './Form';

export interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

export function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar {...props} className="react-aria-ProgressBar">
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          {label && <Label>{label}</Label>}
          <span className="react-aria-ProgressBar-value">{valueText}</span>
          <div className="react-aria-ProgressBar-track">
            <div
              className="react-aria-ProgressBar-fill"
              style={
                {
                  '--progress-percent': (isIndeterminate ? 100 : percentage) + '%',
                } as React.CSSProperties
              }
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}
