import {
  FormContextType,
  getSubmitButtonOptions,
  RJSFSchema,
  StrictRJSFSchema,
  SubmitButtonProps,
} from "@rjsf/utils";
import { Button } from "react-aria-components";

/** The `SubmitButton` renders a button that represent the `Submit` action on a form
 */
export default function SubmitButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: SubmitButtonProps<T, S, F>) {
  const {
    submitText,
    norender,
    props: submitButtonProps,
  } = getSubmitButtonOptions<T, S, F>(props.uiSchema);
  if (norender) {
    return null;
  }
  return (
    <div className="rjsf-submit-button-wrapper">
      <Button
        type="submit"
        {...submitButtonProps}
        className={`rjsf-button rjsf-submit-button ${submitButtonProps?.className || ""}`}
      >
        {submitText}
      </Button>
    </div>
  );
}
