import React, {FC} from 'react';
import {Box, Image, Text} from '@chakra-ui/react';

import placeholderIcon from '../../../assets/icon/placeholderIcon.svg';

interface CirclesImageProps {
  textImage: string;
  alt: string;
  placeholderImage?: string;
}

const CirclesImage: FC<CirclesImageProps> = ({
  alt,
  textImage,
  placeholderImage,
}) => {
  return (
    <Box align="center">
      <Image boxSize="121px" src={placeholderImage} alt={alt} />

      <Text color="#808080" size="16px" mt="7px">
        {textImage}
      </Text>
    </Box>
  );
};

CirclesImage.defaultProps = {
  placeholderImage: placeholderIcon.src,
};

export default CirclesImage;
