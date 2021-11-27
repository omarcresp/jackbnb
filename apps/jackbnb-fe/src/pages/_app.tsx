import React, {FC} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import type {AppProps} from 'next/app';

import '../styles/globals.css';

const AppComponent: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default AppComponent;
