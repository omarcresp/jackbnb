import React from 'react';
import PropTypes from 'prop-types';
import { Button,Image, Stack, Spacer } from "@chakra-ui/react";
import iconApple from './assets/icon/apple.svg';
import iconEmail from './assets/icon/email.svg';
import iconFacebook from './assets/icon/facebook.svg';
import iconGoogle from './assets/icon/google.svg';


const SocialButton = ({ children,icon } ) => {
  return (
       <Button 
        height="38px"
        width="250px"
        variant="outline"
        borderColor="gray.500"
        size="sm"
        color="gray.500"
        pr="30px"
        pl="30px"
        _hover={{ bg: "#ebedf0" }}
        >
           <Image src={icon} boxSize={6} />
           <Spacer />
            {children}

        </Button>
  )
}

export default function Home() {
  return( 
    
      <Stack spacing={4} mt={8} ml={8} >

      <SocialButton
         children="Registrate en Apple"
         icon={iconApple}
      />
  
      <SocialButton
        children="Registrate en Facebook"
        icon={iconFacebook}
      />
  
      <SocialButton
        children="Registrate en Google"
        icon={iconGoogle}
      />

      <SocialButton
        children="Registrate por correo"
        icon={iconEmail}
      />
  
  </Stack>
      )
}

SocialButton.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string
};