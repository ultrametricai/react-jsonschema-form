import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ShadowRootProps {
  children: ReactNode;
  stylesheet?: string | null;
}

/**
 * Renders children inside a Shadow DOM for style isolation.
 * This is used for react-aria theme to isolate from bootstrap/MUI styles
 * while keeping pointer events working (unlike iframes).
 */
export default function ShadowRoot({ children, stylesheet }: ShadowRootProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const shadow = hostRef.current.attachShadow({ mode: "open" });
      setShadowRoot(shadow);
    }
  }, []);

  return (
    <div ref={hostRef}>
      {shadowRoot &&
        createPortal(
          <>
            {stylesheet && <link rel="stylesheet" href={stylesheet} />}
            <div style={{ padding: "16px" }}>
              {children}
            </div>
          </>,
          shadowRoot
        )}
    </div>
  );
}
