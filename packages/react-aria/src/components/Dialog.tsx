'use client';
import {
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  DialogTriggerProps,
} from 'react-aria-components';

export type DialogProps = AriaDialogProps;

export function Dialog(props: DialogProps) {
  return <AriaDialog {...props} className="react-aria-Dialog" />;
}

export function DialogTrigger(props: DialogTriggerProps) {
  return <AriaDialogTrigger {...props} />;
}

export type { DialogTriggerProps };
