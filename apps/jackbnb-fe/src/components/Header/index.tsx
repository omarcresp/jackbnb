<<<<<<< HEAD
import React, { FC } from "react";
import {
  MenuButton,
  IconButton,
  MenuDivider
} from "@chakra-ui/react"
import { Box } from '@chakra-ui/react';

interface HeaderProps{
 fitParent?: boolean;
}

const Header: FC <HeaderProps> = ({fitParent}) => {
return(
  <Box bg="#84F34C" width={fitParent ? 'inherit' : 'unset'} flex-direction="row">
    <MenuButton align-self="start" w="40px"> Weermote </MenuButton>
    <MenuButton
    as={IconButton}
    bg="#3C7A1D"
    aria-label="Options"
    variant="outline"
    align-self="end"
  />
  <MenuDivider/>

   <MenuButton
    as={MenuButton}
    bg="#3C7A1D"
    variant="outline"
    align-self="end"
  />
  </Box>
);
}
=======
import React, {FC} from 'react';
import {MenuButton, IconButton, MenuDivider, Box} from '@chakra-ui/react';

interface HeaderProps {
  fitParent: boolean;
}

const Header: FC<HeaderProps> = ({fitParent}) => {
  return (
    <Box
      bg="#84F34C"
      width={fitParent ? 'inherit' : 'unset'}
      flex-direction="row">
      <MenuButton align-self="start" w="40px">
        {' '}
        Weermote{' '}
      </MenuButton>
      <MenuButton
        as={IconButton}
        bg="#3C7A1D"
        aria-label="Options"
        variant="outline"
        align-self="end"
      />
      <MenuDivider />

      <MenuButton
        as={MenuButton}
        bg="#3C7A1D"
        variant="outline"
        align-self="end"
      />
    </Box>
  );
};
>>>>>>> 8096a830a517624a4ed256b961663504ad27dc28

export default Header;
