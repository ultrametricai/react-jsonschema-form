'use client';
import {
  Separator as AriaSeparator,
  SeparatorProps as AriaSeparatorProps,
} from 'react-aria-components';

export type SeparatorProps = AriaSeparatorProps;

export function Separator(props: SeparatorProps) {
  return <AriaSeparator {...props} className="react-aria-Separator" />;
}
