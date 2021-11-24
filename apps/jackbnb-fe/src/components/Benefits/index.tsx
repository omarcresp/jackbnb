import React, {FC} from 'react';
import { Heading,Box,Stack,Flex,Image,Text } from '@chakra-ui/react';
import placeHolderIcon from '../../assets/icon/placeholderIcon.svg'


const Items: FC = ({title,description}) => {
    
    return(
        
    <Flex mb="32px" align="center">

        <Image src={placeHolderIcon.src} boxSize="49px" alt="image"/>
                    
            <Box ml="10px" >
                <Text size="18px" color="#000000" fontWeight="bold">{title}</Text>
                <Text size="16px" color="#666666" fontWeight="200">{description}</Text>
            </Box>

    </Flex>

    )

}

// resolver el bug del margin
const Benefits: FC = () => {

    return(
        <>
        <Box mt="44px" ml="15px" mr="15px">

            <Heading as="h2" size="22px" color="#000000" textAlign="center" mb="40px">¿Porqué te conviene cambiar tu lugar de trabajo?</Heading>

            <Stack>

                <Items title="Mayor Creatividad" description="Lorem ipsum dolor sit ame" />

                <Items title="Experiencia" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />

                <Items title="Servicio Excelente" description="Lorem ipsum dolor"/>                

            </Stack>

        </Box>


        </>
    )

}

export default Benefits;

