import React from 'react';
import {
    FormControl,
    Input
  } from "@chakra-ui/react"
  import MyTestButtonStyles from './index.module.css'
  


const Form = () => {
    return (
      <FormControl className="container">
          <Input type="name" placeholder="Name" className="form"/>
          <Input type="email" placeholder="Email" className="form"/>
          <Input type="text" placeholder="Message" className="form"/>
      </FormControl>
    );
  };


export default Form;