import {
  ADDITIONAL_PROPERTY_FLAG,
  buttonId,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
  WrapIfAdditionalTemplateProps,
} from "@rjsf/utils";
import { Input, Separator } from "react-aria-components";

/** The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are
 * part of an `additionalProperties` part of a schema.
 *
 * @param props - The `WrapIfAdditionalProps` for this component
 */
export default function WrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({
  classNames,
  style,
  children,
  disabled,
  id,
  label,
  displayLabel,
  onRemoveProperty,
  onKeyRenameBlur,
  rawDescription,
  readonly,
  required,
  schema,
  uiSchema,
  registry,
}: WrapIfAdditionalTemplateProps<T, S, F>) {
  const { templates, translateString } = registry;
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = templates.ButtonTemplates;
  const keyLabel = translateString(TranslatableString.KeyLabel, [label]);
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;

  if (!additional) {
    // Return children directly without wrapper for cleaner DOM structure
    return <>{children}</>;
  }

  const keyId = `${id}-key`;

  return (
    <>
      <div
        className={`react-aria-additional-property ${classNames || ""}`}
        style={style}
      >
        <div className="react-aria-additional-property-key">
          <div className="react-aria-additional-property-key-wrapper">
            {displayLabel && (
              <label
                htmlFor={keyId}
                className="react-aria-additional-property-label"
              >
                {keyLabel}
              </label>
            )}
            <div className="react-aria-input-wrapper">
              <Input
                required={required}
                defaultValue={label}
                disabled={disabled || readonly}
                id={keyId}
                name={keyId}
                onBlur={!readonly ? onKeyRenameBlur : undefined}
                type="text"
              />
            </div>
            {!!rawDescription && (
              <span className="react-aria-additional-property-spacer">&nbsp;</span>
            )}
          </div>
        </div>
        <div className="react-aria-additional-property-value">{children}</div>
        <div className="react-aria-additional-property-remove">
          <RemoveButton
            id={buttonId(id, "remove")}
            iconType="block"
            className="react-aria-object-property-remove"
            disabled={disabled || readonly}
            onClick={onRemoveProperty}
            uiSchema={uiSchema}
            registry={registry}
          />
        </div>
      </div>
      <div className="react-aria-separator-wrapper">
        <Separator />
      </div>
    </>
  );
}
