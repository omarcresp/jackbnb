/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {Button, Img, Box, Divider} from '@chakra-ui/react';

interface IconButtonProps {
  icon: string;
}

const IconButton: FC<IconButtonProps> = ({children, icon}) => {
  return (
    <>
      <Button
        width="375px"
        height="50px"
        borderColor="#808080"
        variant="outline"
        fontSize="18px"
        color="#136262"
        justifyContent="flex-start">
        <Box width="43px">
          <Img src={icon} />
        </Box>

        <Box height="30px">
          <Divider orientation="vertical" borderColor="#808080" mr="10px" />
        </Box>

        <span>{children}</span>
      </Button>
    </>
  );
};

export default IconButton;
