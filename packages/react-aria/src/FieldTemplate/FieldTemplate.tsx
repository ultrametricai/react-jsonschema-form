import {
  FieldTemplateProps,
  FormContextType,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";

/** The `FieldTemplate` component is the template used by `SchemaField` to render any field. It renders the field
 * content, (label, description, children, errors and help) inside a `WrapIfAdditional` component.
 *
 * @param props - The `FieldTemplateProps` for this component
 */
export default function FieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  id,
  children,
  displayLabel,
  errors,
  help,
  description,
  rawDescription,
  classNames,
  style,
  disabled,
  label,
  hidden,
  onKeyRename,
  onKeyRenameBlur,
  onRemoveProperty,
  readonly,
  required,
  schema,
  uiSchema,
  registry,
}: FieldTemplateProps<T, S, F>) {
  const uiOptions = getUiOptions(uiSchema);
  const WrapIfAdditionalTemplate = getTemplate<
    "WrapIfAdditionalTemplate",
    T,
    S,
    F
  >("WrapIfAdditionalTemplate", registry, uiOptions);
  if (hidden) {
    return <div className="react-aria-hidden">{children}</div>;
  }
  const isCheckbox = uiOptions.widget === "checkbox";

  // Check if the field uses a widget that renders its own label via TextField
  // This includes BaseInputTemplate (string/number/integer without widget override) and TextareaWidget
  const schemaType = schema.type;
  const widgetOverride = uiOptions.widget;
  const usesTextFieldLabel =
    ((schemaType === "string" ||
      schemaType === "number" ||
      schemaType === "integer") &&
      !widgetOverride) ||
    widgetOverride === "textarea";

  return (
    <WrapIfAdditionalTemplate
      classNames={classNames}
      style={style}
      disabled={disabled}
      id={id}
      label={label}
      displayLabel={displayLabel}
      onKeyRename={onKeyRename}
      onKeyRenameBlur={onKeyRenameBlur}
      onRemoveProperty={onRemoveProperty}
      rawDescription={rawDescription}
      readonly={readonly}
      required={required}
      schema={schema}
      uiSchema={uiSchema}
      registry={registry}
    >
      {children}
      {displayLabel && rawDescription && !isCheckbox && !usesTextFieldLabel && (
        <span className="react-aria-description">
          {description}
        </span>
      )}
      {errors}
      {help}
    </WrapIfAdditionalTemplate>
  );
}
