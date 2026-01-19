'use client';
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';

export type CheckboxProps = Omit<AriaCheckboxProps, 'children'> & {
  children?: React.ReactNode;
};

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox {...props} className="react-aria-Checkbox">
      {({ isIndeterminate }) => (
        <>
          <div className="react-aria-Checkbox-indicator">
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
              key={isIndeterminate ? 'indeterminate' : 'check'}
            >
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={16} height={3} />
              ) : (
                <polyline points="2 9 7 14 16 4" />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </AriaCheckbox>
  );
}
