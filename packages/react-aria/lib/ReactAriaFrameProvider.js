import { jsx as _jsx } from "react/jsx-runtime";
import { UNSAFE_PortalProvider } from "@react-aria/overlays";
export const __createReactAriaFrameProvider = (props) => ({ document }) => {
    return (_jsx(UNSAFE_PortalProvider, { getContainer: () => { var _a; return (_a = document === null || document === void 0 ? void 0 : document.body) !== null && _a !== void 0 ? _a : null; }, children: props.children }));
};
//# sourceMappingURL=ReactAriaFrameProvider.js.map