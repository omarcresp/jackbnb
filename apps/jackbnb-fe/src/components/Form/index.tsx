import React from 'react';
import{ FormControl, Input } from "@chakra-ui/react";


import MyTestButtonStyles from './index.module.css';



const Form = () => {
    return (
      <FormControl className={MyTestButtonStyles.container}>
          <Input type="name" placeholder="Name" className={MyTestButtonStyles.form}/>
          <Input type="email" placeholder="Email" className={MyTestButtonStyles.form}/>
          <Input type="text" placeholder="Message" className={MyTestButtonStyles.form}/>
      </FormControl>
    );
  };


export default Form;
