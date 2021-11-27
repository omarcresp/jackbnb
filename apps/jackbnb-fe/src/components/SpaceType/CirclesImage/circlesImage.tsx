import React, {FC} from 'react';
import { Box,Image,Text } from "@chakra-ui/react";

import placeholderIcon from "../../../assets/icon/placeholderIcon.svg";


interface CirclesImageProps{
    textImage: string;
    alt:string;
  }
  
  const CirclesImage:FC <CirclesImageProps> = ({alt,textImage}) => {
  
      return(
  
          <Box align="center">
  
          <Image boxSize="121px" src={placeholderIcon.src} alt={alt}/>
  
          <Text color="#808080" size="16px" mt="7px">{textImage} </Text>
  
          </Box>
      
      )
  }

  export default CirclesImage;