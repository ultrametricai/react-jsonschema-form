import {
  FormContextType,
  IconButtonProps,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";
import { Button } from "react-aria-components";

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
>({ registry, className, disabled, onClick }: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <div className="rjsf-add-button-wrapper">
      <Button
        isDisabled={disabled}
        onPress={onClick as any}
        className={`rjsf-button rjsf-add-button ${className || ""}`}
        type="button"
      >
        <span aria-hidden="true">+</span>{" "}
        {translateString(TranslatableString.AddItemButton)}
      </Button>
    </div>
  );
}
