import {
  ErrorListProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";

/** The `ErrorList` component is the template that renders the all the errors associated with the fields in the `Form`
 *
 * @param props - The `ErrorListProps` for this component
 */
export default function ErrorList<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ errors, registry }: ErrorListProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <div className="react-aria-error-list" role="alert">
      <div className="react-aria-error-list-title">
        {translateString(TranslatableString.ErrorsLabel)}
      </div>
      <ul className="react-aria-error-list-items">
        {errors.map((error, i: number) => {
          return (
            <li key={i} className="react-aria-error-list-item">
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
