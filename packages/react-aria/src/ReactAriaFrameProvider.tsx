import { ReactNode } from "react";
import { UNSAFE_PortalProvider } from "@react-aria/overlays";

interface FrameProviderProps {
  children: ReactNode;
}

interface FrameContext {
  document?: Document;
}

export const __createReactAriaFrameProvider =
  (props: FrameProviderProps) =>
  ({ document }: FrameContext) => {
    return (
      <UNSAFE_PortalProvider getContainer={() => document?.body ?? null}>
        {props.children}
      </UNSAFE_PortalProvider>
    );
  };
