import {
  FormContextType,
  MultiSchemaFieldTemplateProps,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";

export default function MultiSchemaFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ selector, optionSchemaField }: MultiSchemaFieldTemplateProps<T, S, F>) {
  return (
    <div className="react-aria-multi-schema-field">
      <div className="react-aria-multi-schema-selector">{selector}</div>
      {optionSchemaField}
    </div>
  );
}
