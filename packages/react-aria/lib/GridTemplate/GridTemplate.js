import { jsx as _jsx } from "react/jsx-runtime";
/** Renders a `GridTemplate` for react-aria.
 *
 * @param props - The GridTemplateProps, including the extra props containing grid positioning details
 */
export default function GridTemplate(props) {
    const { children, column, className, ...rest } = props;
    return (_jsx("div", { className: `react-aria-grid ${className || ""}`, ...rest, children: children }));
}
//# sourceMappingURL=GridTemplate.js.map