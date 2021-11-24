import React, {FC} from 'react';
import { Heading,Box,Image,Text } from "@chakra-ui/react";
import placeholderIcon from "../../assets/icon/placeholderIcon.svg";

import SpaceTypeStyles from './index.module.css'

const CirclesImage:FC = ({textImage}) => {

    return(

        <Box mr="10px">
        <Image
        boxSize="121px"
        src={placeholderIcon.src}
        alt="image"/>

        <Text color="#808080" size="16px">{textImage} </Text>

        </Box>
    
    )
}

const SpaceType: FC = () => {

  return (
    <>

    <Box align="center" mt="47px" mb="24px">

        <Heading as="h2" size="22px" color="#000000" >¿Qué espacio estás buscando?</Heading>

    </Box>

    <div className={SpaceTypeStyles.myContainer} >
        
        <CirclesImage textImage="Zonas verdes" />
        
        <CirclesImage textImage="Zonas urbanas"/>

        <CirclesImage textImage="Zonas urbanas"/>

        <CirclesImage textImage="Zonas urbanas"/>

        <CirclesImage textImage="Zonas urbanas"/>

        <CirclesImage textImage="Zonas urbanas"/>

        <CirclesImage textImage="Zonas urbanas"/>
    </div>



    </>
  );
};

export default SpaceType;
