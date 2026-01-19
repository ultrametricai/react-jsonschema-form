'use client';
import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
} from 'react-aria-components';

export type LinkProps = AriaLinkProps;

export function Link(props: LinkProps) {
  return <AriaLink {...props} className="react-aria-Link" />;
}
