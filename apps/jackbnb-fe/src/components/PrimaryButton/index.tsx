import React, {FC} from 'react';
import {Button} from '@chakra-ui/react';

interface PrimaryButtonProps {
  fitParent?: boolean;
  onClick: => () void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({children, fitParent}) => {
  return (
    <Button
      bg="#58DE15"
      h="50px"
      radio="10px"
      text-align="center"
      p="10px"
      onClick={}
      width={fitParent ? 'inherit' : 'unset'}>
      {children}
    </Button>
  );
};

PrimaryButton.defaultProps = {
  fitParent: false,
};

export default PrimaryButton;
