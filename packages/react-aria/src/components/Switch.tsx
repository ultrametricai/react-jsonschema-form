'use client';
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
} from 'react-aria-components';

export interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
  children: React.ReactNode;
}

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <AriaSwitch {...props} className="react-aria-Switch">
      {({ isSelected, isDisabled }) => (
        <>
          <div className="react-aria-Switch-track">
            <div
              className="react-aria-Switch-handle"
              data-selected={isSelected || undefined}
              data-disabled={isDisabled || undefined}
            />
          </div>
          {children}
        </>
      )}
    </AriaSwitch>
  );
}
