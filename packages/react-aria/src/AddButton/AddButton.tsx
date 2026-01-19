import {
  FormContextType,
  IconButtonProps,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";
import { Button as AriaButton } from "react-aria-components";

/**
 * A button component for adding new items in a form
 * @param uiSchema - The UI schema for the form, which can include custom properties
 * @param registry - The registry object containing the form's configuration and utilities
 * @param className - Allow custom class names to be passed for styling
 * @param props - The component properties
 */
export default function AddButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ registry, disabled, onClick }: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <AriaButton
      className="react-aria-Button react-aria-AddButton"
      isDisabled={disabled}
      onPress={onClick as any}
      type="button"
    >
      <svg viewBox="0 0 18 18" aria-hidden="true" className="react-aria-AddButton-icon">
        <path d="M9 3 L9 15 M3 9 L15 9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {translateString(TranslatableString.AddItemButton)}
    </AriaButton>
  );
}
