import { ComponentType, forwardRef } from "react";

import { FormProps, withTheme } from "@rjsf/core";
import { FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils";
import { Form as AriaForm } from "react-aria-components";

import { generateTheme } from "../Theme";

/** Wrapper component that forwards refs and integrates React Aria's Form.
 * Moves the RJSF className to a wrapper div so React Aria Form keeps its default class.
 */
const ReactAriaFormWrapper = forwardRef<
  HTMLFormElement,
  React.ComponentProps<typeof AriaForm>
>(({ className, ...props }, ref) => {
  return (
    <div className={className}>
      <AriaForm {...props} ref={ref} />
    </div>
  );
});

ReactAriaFormWrapper.displayName = "ReactAriaFormWrapper";

export function generateForm<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(): ComponentType<FormProps<T, S, F>> {
  const ThemedForm = withTheme<T, S, F>(generateTheme<T, S, F>());

  // Create a wrapper that uses React Aria's Form component as the tagName
  const AriaThemedForm = forwardRef<any, FormProps<T, S, F>>((props, ref) => {
    return (
      <ThemedForm {...props} ref={ref} tagName={ReactAriaFormWrapper} />
    );
  });

  AriaThemedForm.displayName = "AriaThemedForm";

  return AriaThemedForm as ComponentType<FormProps<T, S, F>>;
}

export default generateForm();
