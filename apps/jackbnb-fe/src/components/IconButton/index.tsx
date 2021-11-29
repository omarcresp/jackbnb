import React, {FC} from 'react';
import {Button, Img, Box, Divider} from '@chakra-ui/react';

interface IconButtonProps {
  icon: string;
  marginLeft: string;
  title: string;
}

const IconButton: FC<IconButtonProps> = ({icon, marginLeft, title}) => {
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
        <Img src={icon} />

        <Box height="30px">
          <Divider
            orientation="vertical"
            borderColor="#808080"
            mr="10px"
            ml={marginLeft}
          />
        </Box>

        {title}
      </Button>
    </>
  );
};

export default IconButton;
