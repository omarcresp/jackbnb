/* eslint-disable camelcase */
import React, {FC} from 'react';
import {Box, Img, Text, Flex, Divider} from '@chakra-ui/react';

import profileProperty from '../../assets/icon/profileProperty.svg';
import dots from '../../assets/icon/dots.svg';
import ImageProperty from '../../assets/images/bulding.png';

import PropertyCardStyle from './index.module.css';

interface PropertyCard {
  alt: string;
  pc_min: string;
  pc_max: string;
  distance: string;
  name: string;
  description: string;
  location: string;
}

const PropertyCard: FC<PropertyCard> = ({
  alt,
  pc_min,
  pc_max,
  distance,
  name,
  description,
  location,
}) => {
  return (
    <Box
      width="384px"
      borderWidth="1px"
      borderRadius="15px"
      borderColor="#CCCCCC"
      overflow="hidden"
      mb="60px"
      className={PropertyCardStyle.container}>
      <Img height="385" src={ImageProperty.src} alt={alt} />

      <Flex
        width="100%"
        justifyContent="start"
        color="#D9F2A5"
        fontWeight="400"
        fontSize="18px"
        className={PropertyCardStyle.specification}>
        <Img
          src={profileProperty.src}
          alt="icon"
          height="26px"
          width="26px"
          mr="6px"
        />
        <Text>
          {pc_min}-{pc_max}
        </Text>
        <Box height="32px">
          <Divider orientation="vertical" borderColor="#D9F2A5" mx="20px" />
        </Box>
        <Text>{distance}</Text>
      </Flex>

      <Img
        src={dots.src}
        alt="icon"
        height="6px"
        className={PropertyCardStyle.dots}
      />

      <Box p="14px 20px 30px">
        <Box
          fontSize="22px"
          fontWeight="600"
          color="#1A1A1A"
          as="h3"
          isTruncated>
          {name}
        </Box>

        <Text mt="5px" fontSize="16px" fontWeight="400" color="#808080">
          {location}
        </Text>

        <Text
          mt="20px"
          fontSize="16px"
          fontWeight="200"
          lineHeight="20px"
          color="#666666">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default PropertyCard;
