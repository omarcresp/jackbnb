import React from 'react';
import type { NextPage } from 'next'
import { Stack } from "@chakra-ui/react";
import IconButton from '../../components/IconButton';
import iconApple from './assets/icon/apple.svg';
import iconEmail from './assets/icon/email.svg';
import iconFacebook from './assets/icon/facebook.svg';
import iconGoogle from './assets/icon/google.svg';


import MyTestButton from '../../components/MyTestButton';

const UiTestPage: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>

      <MyTestButton>World</MyTestButton>

      <Stack spacing={4} mt={8} ml={8} >

      <IconButton icon={iconApple}>
        Registrate en Apple
      <IconButton/>
  
      <IconButton icon={iconFacebook}>
        Registrate en Facebook
      </IconButton>
  
      <IconButton icon={iconGoogle}>
        Registrate en Google
      <IconButton/>

      <IconButton icon={iconEmail}>
        Registrate por correo
      <IconButton/>
  
  </Stack>
    </div>
  )
};

export default UiTestPage;
