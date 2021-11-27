import React, {FC} from 'react';
import { Heading,Box,Image,Text } from "@chakra-ui/react";
import placeholderIcon from "../../assets/icon/placeholderIcon.svg";

import SpaceTypeStyles from './index.module.css';

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

const SpaceType: FC = () => {

  return (

    <div className={SpaceTypeStyles.myContainer}>

        <Box mt="47px" mb="24px">

            <Heading as="h2" size="22px" color="#000000" textAlign="center" >¿Qué espacio estás buscando?</Heading>

        </Box>

        <div className={SpaceTypeStyles.myContainer_items} >
            
            <CirclesImage alt="zona verde" textImage="Zonas Verdes" />
            
            <CirclesImage alt="zona urbana" textImage="Zonas Urbanas"/>

            <CirclesImage alt="biblioteca" textImage="Biblioteca"/>

            <CirclesImage alt="oficina" textImage="Oficina"/>

            <CirclesImage alt="coworking" textImage="Coworking"/>

        </div>

    </div>

  );
};

export default SpaceType;
