import React from 'react';
import { Button,Icon, Stack, Spacer } from "@chakra-ui/react";
import { FaFacebook,FaTwitter,FaGoogle } from "react-icons/fa";


function Feature({ title,icono }) {
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
           <Icon as={icono} boxSize={6} />
           <Spacer />
            {title}

        </Button>
  )
}

export default function Home() {
  return( 
    
      <Stack spacing={4} mt={8} ml={8} >

      <Feature
         title="Registrate en Twitter"
         icono={FaFacebook}
      />
  
      <Feature
        title="Registrate en Facebook"
        icono={FaTwitter}
      />
  
      <Feature
        title="Registrate en Google"
        icono={FaGoogle}
      />
  
  </Stack>
      )
}

