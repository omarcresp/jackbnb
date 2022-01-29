import React, {FC} from 'react';
import {Box, Flex, Image, Text} from '@chakra-ui/react';

import itemsStyles from './index.module.css';
import placeHolderIcon from '../../assets/icon/placeholderIcon.svg';

interface ItemsProps {
  alt: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const Items: FC<ItemsProps> = ({imageUrl, alt, title, description}) => {
  return (
    <div className={itemsStyles.itemContainer}>
      <Image src={imageUrl} boxSize="49px" alt={alt} />

      <Box>
        <Text fontSize="18px" color="#000000" fontWeight="400">
          {title}
        </Text>

        <Text fontSize="16px" color="#666666" fontWeight="200">
          {description}
        </Text>
      </Box>
    </div>
  );
};

Items.defaultProps = {
  imageUrl: placeHolderIcon.src,
};

export default Items;
