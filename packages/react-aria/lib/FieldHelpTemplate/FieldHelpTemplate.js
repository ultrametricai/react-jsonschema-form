import { jsx as _jsx } from "react/jsx-runtime";
import { helpId, } from "@rjsf/utils";
import { RichHelp } from "@rjsf/core";
/** The `FieldHelpTemplate` component renders any help desired for a field
 *
 * @param props - The `FieldHelpProps` to be rendered
 */
export default function FieldHelpTemplate(props) {
    const { fieldPathId, help, uiSchema, registry, hasErrors } = props;
    if (!help) {
        return null;
    }
    return (_jsx("span", { className: `react-aria-field-help ${hasErrors ? "react-aria-field-help-error" : ""}`, id: helpId(fieldPathId), children: _jsx(RichHelp, { help: help, registry: registry, uiSchema: uiSchema }) }));
}
//# sourceMappingURL=FieldHelpTemplate.js.map