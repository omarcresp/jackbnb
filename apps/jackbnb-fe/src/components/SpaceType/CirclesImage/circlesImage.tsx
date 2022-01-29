import React, {FC} from 'react';
import {Box, Image, Text} from '@chakra-ui/react';

import placeholderIcon from '../../../assets/icon/placeholderIcon.svg';

export interface CirclesImageProps {
  textImage: string;
  alt: string;
  imageUrl?: string;
}

const CirclesImage: FC<CirclesImageProps> = ({
  alt,
  textImage,
  imageUrl,
}) => {
  return (
    <Box align="center">
      <Image boxSize="121px" src={imageUrl} alt={alt} />

      <Text color="#808080" size="16px" mt="7px" mb="9px">
        {textImage}
      </Text>
    </Box>
  );
};

CirclesImage.defaultProps = {
  imageUrl: placeholderIcon.src,
};

export default CirclesImage;
