import {
  ArrayFieldItemTemplateProps,
  FormContextType,
  getTemplate,
  getUiOptions,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";

/** The `ArrayFieldItemTemplate` component is the template used to render an items of an array.
 *
 * @param props - The `ArrayFieldItemTemplateProps` props for the component
 */
export default function ArrayFieldItemTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: ArrayFieldItemTemplateProps<T, S, F>) {
  const {
    children,
    buttonsProps,
    displayLabel,
    hasDescription,
    hasToolbar,
    uiSchema,
    registry,
  } = props;
  const uiOptions = getUiOptions<T, S, F>(uiSchema);
  const ArrayFieldItemButtonsTemplate = getTemplate<
    "ArrayFieldItemButtonsTemplate",
    T,
    S,
    F
  >("ArrayFieldItemButtonsTemplate", registry, uiOptions);
  return (
    <div className="react-aria-array-item">
      <div className="react-aria-array-item-inner">
        <div className="react-aria-array-item-content">{children}</div>
        <div className="react-aria-array-item-buttons">
          {hasToolbar && (
            <div
              className="react-aria-array-item-buttons-inner"
              style={{
                marginTop: displayLabel
                  ? hasDescription
                    ? "-6px"
                    : "22px"
                  : undefined,
              }}
            >
              <ArrayFieldItemButtonsTemplate {...buttonsProps} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
