'use client';
import {
  Form as RACForm,
  FormProps,
  LabelProps,
  Label as RACLabel,
  FieldErrorProps,
  FieldError as RACFieldError,
  ButtonProps,
  Button,
  TextProps,
  Text,
} from 'react-aria-components';

export function Form(props: FormProps) {
  return <RACForm {...props} />;
}

export function Label(props: LabelProps) {
  return <RACLabel {...props} className="react-aria-Label" />;
}

export function FieldError(props: FieldErrorProps) {
  return <RACFieldError {...props} className="react-aria-FieldError" />;
}

export function Description(props: TextProps) {
  return <Text slot="description" {...props} className="react-aria-Description" />;
}

export function FieldButton(props: ButtonProps) {
  return <Button {...props} className="react-aria-FieldButton" />;
}
