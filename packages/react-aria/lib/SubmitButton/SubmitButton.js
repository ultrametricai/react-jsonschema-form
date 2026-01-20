import { jsx as _jsx } from "react/jsx-runtime";
import { getSubmitButtonOptions, } from "@rjsf/utils";
import { Button as AriaButton } from "react-aria-components";
/** The `SubmitButton` renders a button that represent the `Submit` action on a form
 */
export default function SubmitButton(props) {
    const { submitText, norender, props: submitButtonProps, } = getSubmitButtonOptions(props.uiSchema);
    if (norender) {
        return null;
    }
    return (_jsx(AriaButton, { className: "react-aria-Button react-aria-SubmitButton", type: "submit", ...submitButtonProps, children: submitText }));
}
//# sourceMappingURL=SubmitButton.js.map