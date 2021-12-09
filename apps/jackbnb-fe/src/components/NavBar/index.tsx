import React, {FC} from 'react';
import {Box, Flex, Heading, Img, Divider} from '@chakra-ui/react';

import hamburgerButton from '../../assets/icon/hamburger-button.svg';
// TODO: Use the png version of the icon because the actual svg version is broken
import profileIcon from '../../assets/icon/profile-icon.png';

const NavBar: FC = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg="#D9F2A5"
        w="100%"
        h="50px">
        <Heading size="18px" ml="15px" color="#000000">
          Brand
        </Heading>

        <Flex alignItems="center" justifyContent="center" mr="15px">
          <Img boxSize="16px" src={hamburgerButton.src} />

          <Box height="29.5px">
            <Divider
              orientation="vertical"
              borderColor="#136262"
              mr="15px"
              ml="15px"
            />
          </Box>

          <Img boxSize="23px" src={profileIcon.src} />
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
