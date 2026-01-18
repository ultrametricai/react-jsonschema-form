import {
  FieldHelpProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  helpId,
} from "@rjsf/utils";
import { RichHelp } from "@rjsf/core";

/** The `FieldHelpTemplate` component renders any help desired for a field
 *
 * @param props - The `FieldHelpProps` to be rendered
 */
export default function FieldHelpTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldHelpProps<T, S, F>) {
  const { fieldPathId, help, uiSchema, registry, hasErrors } = props;
  if (!help) {
    return null;
  }

  return (
    <span
      className={`rjsf-field-help ${hasErrors ? "rjsf-field-help-error" : ""}`}
      id={helpId(fieldPathId)}
    >
      <RichHelp help={help} registry={registry} uiSchema={uiSchema} />
    </span>
  );
}
