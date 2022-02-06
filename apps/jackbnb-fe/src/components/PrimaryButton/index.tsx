import React, {FC} from 'react';
import {Button} from '@chakra-ui/react';

interface PrimaryButtonProps {
  fitParent?: boolean;
  onClick: () => void;
}

<<<<<<< HEAD
const PrimaryButton: FC<PrimaryButtonProps> = ({children, fitParent, onClick}) => {
=======
const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  fitParent,
  onClick,
}) => {
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
  return (
    <Button
      bg="#58DE15"
      h="50px"
      radio="10px"
      text-align="center"
      p="10px"
      width={fitParent ? 'inherit' : 'unset'}
      onClick={onClick}>
<<<<<<< HEAD
      Continuar
=======
      {children}
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28
    </Button>
  );
};

PrimaryButton.defaultProps = {
  fitParent: false,
};

export default PrimaryButton;
