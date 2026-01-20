import { ReactNode } from "react";
interface FrameProviderProps {
    children: ReactNode;
}
interface FrameContext {
    document?: Document;
}
export declare const __createReactAriaFrameProvider: (props: FrameProviderProps) => ({ document }: FrameContext) => import("react/jsx-runtime").JSX.Element;
export {};
