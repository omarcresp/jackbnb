import React, {FC} from 'react';
import {Button} from '@chakra-ui/react';

interface PrimaryButtonProps {
  fitParent?: boolean;
  onClick: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({children, fitParent, onClick}) => {
  return (
    <Button
      bg="#58DE15"
      h="50px"
      radio="10px"
      text-align="center"
      p="10px"
      width={fitParent ? 'inherit' : 'unset'}
      onClick={onClick}>
      Continuar
    </Button>
  );
};

PrimaryButton.defaultProps = {
  fitParent: false,
};

export default PrimaryButton;
