import { ChakraProvider, defaultSystem, EnvironmentProvider } from '@chakra-ui/react';
import { FormProps } from '@rjsf/core';

import Form from '../src';

export default function WrappedForm(props: FormProps) {
  return (
    <EnvironmentProvider value={document}>
      <ChakraProvider value={defaultSystem}>
        <Form {...props} />
      </ChakraProvider>
    </EnvironmentProvider>
  );
}
