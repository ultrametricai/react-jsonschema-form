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
/**
 * A button component for adding new items in a form
 * @param uiSchema - The UI schema for the form, which can include custom properties
 * @param registry - The registry object containing the form's configuration and utilities
 * @param className - Allow custom class names to be passed for styling
 * @param props - The component properties
 */
export default function AddButton({ registry, disabled, onClick, id }) {
    const { translateString } = registry;
    const handlePress = useCallback((e) => {
        onClick === null || onClick === void 0 ? void 0 : onClick(createSyntheticMouseEvent(e));
    }, [onClick]);
    return (_jsxs(AriaButton, { id: id, className: "react-aria-Button react-aria-AddButton", isDisabled: disabled, onPress: handlePress, type: "button", children: [_jsx("svg", { viewBox: "0 0 18 18", "aria-hidden": "true", className: "react-aria-AddButton-icon", children: _jsx("path", { d: "M9 3 L9 15 M3 9 L15 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }), translateString(TranslatableString.AddItemButton)] }));
}
//# sourceMappingURL=AddButton.js.map