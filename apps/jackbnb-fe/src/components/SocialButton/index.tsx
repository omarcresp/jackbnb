import React, { FC } from 'react';
import { Stack } from '@chakra-ui/react';

import emailIcon from '../../assets/icon/email.svg';
import googleIcon from '../../assets/icon/google.svg';
import facebookIcon from '../../assets/icon/facebook.svg';
import appleIcon from '../../assets/icon/apple.svg';

import IconButton from '../IconButton';



const SocialButton: FC = () => {
    
    return (
    <>

    <Stack align="center" spacing="21px">

    <IconButton title="Ingresa por correo electrónico" icon={emailIcon.src} marginLeft="13px" />

    <IconButton title="Continúa con Google" icon={googleIcon.src} marginLeft="17px" />

    <IconButton title="Continúa con Facebook" icon={facebookIcon.src} marginLeft="13px" />

    <IconButton title="Continúa con Apple" icon={appleIcon.src} marginLeft="17px" />

    </Stack>

     </>
    );
  };
  
  export default SocialButton;
    
