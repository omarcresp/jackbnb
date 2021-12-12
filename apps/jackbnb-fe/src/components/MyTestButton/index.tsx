import React, {FC, useState} from 'react';
import {Button} from '@chakra-ui/react';

import MyTestButtonStyles from './index.module.css';

interface MyTestButtonProps {
  onClick: () => void;
}

const MyTestButton: FC<MyTestButtonProps> = ({children, onClick}) => {
  const [message, setMessage] = useState('');

  const sayHi = () => {
    setMessage('hidden message');
    onClick?.();
  };

  return (
    <div className={MyTestButtonStyles.myContainer}>
      <Button colorScheme="blue" variant="outline" onClick={sayHi}>
        {children}
      </Button>

      <p>{message}</p>
    </div>
  );
};

export default MyTestButton;
