import React, { FC } from 'react'
import { Button } from "@chakra-ui/react"

interface FormButtonProps {
    width?: boolean;
    Link?: undefined;
  }


const FormButton: FC <FormButtonProps> = ({children, width, Link}) => {
    return (
      <Button m="10px" text-align="center" spacing={4} bg="#45B39D" h="50px" onClick={Link} width={width ? 'inherit' : 'unset'}>
           { children }
      </Button>
    );
  }


export default FormButton;
