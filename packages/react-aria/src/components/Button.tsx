'use client';
import { Button as RACButton, ButtonProps as RACButtonProps, composeRenderProps } from 'react-aria-components';

interface ButtonProps extends RACButtonProps {
  /**
   * The visual style of the button.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'quiet';
}

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className="react-aria-Button"
      data-variant={props.variant || 'primary'}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          {!isPending && children}
          {isPending && <span className="react-aria-Button-spinner">...</span>}
        </>
      ))}
    </RACButton>
  );
}
