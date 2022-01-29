import React, {FC} from 'react';
import Image from 'next/image';
import {Box, Flex, Heading, Img, Divider} from '@chakra-ui/react';

import hamburgerButton from '../../assets/icon/hamburger-button.svg';
import profileIcon from '../../assets/icon/profile-icon.svg';
import logoTextBlackIcon from '../../assets/icon/logo-text-black.svg';

const NavBar: FC = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg="#D9F2A5"
        w="100%"
        h="50px">
        <Heading fontSize="18px" ml="15px" color="#000000">
          <Image width="90px" height="19px" src={logoTextBlackIcon.src} />
        </Heading>

        <Flex alignItems="center" justifyContent="center" mr="15px">
          <Image width="26px" height="16px" src={hamburgerButton.src} />

          <Box height="29.5px">
            <Divider
              orientation="vertical"
              borderColor="#136262"
              m="0px 15px"
            />
          </Box>

          <Image width="24px" height="24px" src={profileIcon.src} />
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
