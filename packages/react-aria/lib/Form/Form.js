import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { withTheme } from "@rjsf/core";
import { Form as AriaForm } from "react-aria-components";
import { generateTheme } from "../Theme/index.js";
/** Wrapper component that forwards refs and integrates React Aria's Form.
 * Moves the RJSF className to a wrapper div so React Aria Form keeps its default class.
 */
const ReactAriaFormWrapper = forwardRef(({ className, ...props }, ref) => {
    return (_jsx("div", { className: className, children: _jsx(AriaForm, { ...props, ref: ref }) }));
});
ReactAriaFormWrapper.displayName = "ReactAriaFormWrapper";
export function generateForm() {
    const ThemedForm = withTheme(generateTheme());
    // Create a wrapper that uses React Aria's Form component as the tagName
    const AriaThemedForm = forwardRef((props, ref) => {
        return (_jsx(ThemedForm, { ...props, ref: ref, tagName: ReactAriaFormWrapper }));
    });
    AriaThemedForm.displayName = "AriaThemedForm";
    return AriaThemedForm;
}
export default generateForm();
//# sourceMappingURL=Form.js.map