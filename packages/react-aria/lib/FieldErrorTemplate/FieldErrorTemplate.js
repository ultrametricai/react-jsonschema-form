import { jsx as _jsx } from "react/jsx-runtime";
import { errorId, } from "@rjsf/utils";
/** The `FieldErrorTemplate` component renders the errors local to the particular field
 *
 * @param props - The `FieldErrorProps` for the errors being rendered
 */
export default function FieldErrorTemplate(props) {
    const { errors = [], fieldPathId } = props;
    if (errors.length === 0) {
        return null;
    }
    const id = errorId(fieldPathId);
    return (_jsx("div", { className: "react-aria-field-errors", id: id, children: errors.map((error, i) => {
            return (_jsx("span", { className: "react-aria-field-error", children: error }, i));
        }) }));
}
//# sourceMappingURL=FieldErrorTemplate.js.map