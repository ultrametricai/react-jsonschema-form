'use client';
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  ModalOverlayProps,
} from 'react-aria-components';

export type ModalProps = ModalOverlayProps;

export function Modal(props: ModalProps) {
  return <AriaModal {...props} className="react-aria-Modal" />;
}

export function ModalOverlay(props: ModalOverlayProps) {
  return <AriaModalOverlay {...props} className="react-aria-ModalOverlay" />;
}
