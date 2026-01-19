import { GridTemplateProps } from "@rjsf/utils";

/** Renders a `GridTemplate` for react-aria.
 *
 * @param props - The GridTemplateProps, including the extra props containing grid positioning details
 */
export default function GridTemplate(props: GridTemplateProps) {
  const { children, column, className, ...rest } = props;
  return (
    <div className={`react-aria-grid ${className || ""}`} {...rest}>
      {children}
    </div>
  );
}
