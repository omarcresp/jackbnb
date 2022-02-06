<<<<<<< HEAD
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

=======
import React, {FC} from 'react';
import {FormControl, Input} from '@chakra-ui/react';

import MyTestButtonStyles from './index.module.css';

const Form: FC = () => {
  return (
    <FormControl className={MyTestButtonStyles.container}>
      <Input
        type="name"
        placeholder="Name"
        className={MyTestButtonStyles.form}
      />
      <Input
        type="email"
        placeholder="Email"
        className={MyTestButtonStyles.form}
      />
      <Input
        type="text"
        placeholder="Message"
        className={MyTestButtonStyles.form}
      />
    </FormControl>
  );
};
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28

export default Form;
