import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TranslatableString, } from "@rjsf/utils";
import { Button as AriaButton } from "react-aria-components";
import { useCallback } from "react";
/** Creates a synthetic MouseEvent-like object from a PressEvent for RJSF compatibility.
 * RJSF handlers expect MouseEvent with preventDefault(), but React Aria provides PressEvent.
 */
function createSyntheticMouseEvent(e) {
    return {
        preventDefault: () => { },
        stopPropagation: () => { var _a; return (_a = e.continuePropagation) === null || _a === void 0 ? void 0 : _a.call(e); },
        target: e.target,
        currentTarget: e.target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
    };
}
/** Base button component that renders a React Aria button with an icon for RJSF form actions.
 * This component serves as the foundation for other specialized buttons used in array operations.
 * It combines RJSF's IconButtonProps with React Aria's Button to provide consistent styling
 * and behavior across the form.
 *
 * @param props - The combined props from RJSF IconButtonProps, including icon and event handlers
 */
export default function IconButton(props) {
    const { icon, disabled, onClick, title, id } = props;
    const handlePress = useCallback((e) => {
        onClick === null || onClick === void 0 ? void 0 : onClick(createSyntheticMouseEvent(e));
    }, [onClick]);
    return (_jsx(AriaButton, { id: id, className: "react-aria-Button react-aria-IconButton", isDisabled: disabled, onPress: handlePress, "aria-label": title, type: "button", children: icon }));
}
/** Renders a copy button for RJSF array fields that allows users to duplicate array items.
 * The button includes a copy icon and uses the RJSF translation system for the tooltip text.
 * This is used within ArrayField to provide item duplication functionality.
 *
 * @param props - The RJSF icon button properties, including registry for translations and event handlers
 */
export function CopyButton(props) {
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.CopyButton), ...props, icon: _jsxs("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: [_jsx("rect", { x: "6", y: "6", width: "10", height: "10", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("rect", { x: "2", y: "2", width: "10", height: "10", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.5" })] }) }));
}
/** Renders a move down button for RJSF array fields that allows reordering of array items.
 * The button includes a chevron-down icon and uses the RJSF translation system for the tooltip text.
 * This is used within ArrayField to allow moving items to a lower index in the array.
 *
 * @param props - The RJSF icon button properties, including registry for translations and event handlers
 */
export function MoveDownButton(props) {
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.MoveDownButton), ...props, icon: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: _jsx("path", { d: "M4 7 L9 12 L14 7", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
}
/** Renders a move up button for RJSF array fields that allows reordering of array items.
 * The button includes a chevron-up icon and uses the RJSF translation system for the tooltip text.
 * This is used within ArrayField to allow moving items to a higher index in the array.
 *
 * @param props - The RJSF icon button properties, including registry for translations and event handlers
 */
export function MoveUpButton(props) {
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.MoveUpButton), ...props, icon: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: _jsx("path", { d: "M4 11 L9 6 L14 11", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
}
/** Renders a remove button for RJSF array fields that allows deletion of array items.
 * The button includes a trash icon and uses the RJSF translation system for the tooltip text.
 * It has special styling with destructive colors to indicate its dangerous action.
 * This is used within ArrayField to provide item removal functionality.
 *
 * @param props - The RJSF icon button properties, including registry for translations and event handlers
 */
export function RemoveButton(props) {
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.RemoveButton), ...props, icon: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: _jsx("path", { d: "M4 4 L14 14 M14 4 L4 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }));
}
export function ClearButton(props) {
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.ClearButton), ...props, icon: _jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-IconButton-icon", children: _jsx("path", { d: "M4 4 L14 14 M14 4 L4 14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }));
}
//# sourceMappingURL=IconButton.js.map