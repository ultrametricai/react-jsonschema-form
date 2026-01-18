import {
  FormContextType,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
  TitleFieldProps,
} from "@rjsf/utils";
import { Separator } from "react-aria-components";

/** The `TitleField` is the template to use to render the title of a field
 *
 * @param props - The `TitleFieldProps` for this component
 */
export default function TitleField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ id, title, uiSchema, optionalDataControl }: TitleFieldProps<T, S, F>) {
  const uiOptions = getUiOptions<T, S, F>(uiSchema);
  let heading = <h5 className="rjsf-title-heading">{uiOptions.title || title}</h5>;
  if (optionalDataControl) {
    heading = (
      <div className="rjsf-title-with-control">
        <div className="rjsf-title-heading-wrapper">{heading}</div>
        <div className="rjsf-title-control">{optionalDataControl}</div>
      </div>
    );
  }
  return (
    <div id={id} className="rjsf-title-field">
      {heading}
      <div className="rjsf-title-separator">
        <Separator />
      </div>
    </div>
  );
}
