import React, {FC} from 'react';
import {Heading, Box, Stack} from '@chakra-ui/react';

import Items from './Items';

const Benefits: FC = () => {
  return (
    <>
      <Box mt="44px" ml="15px" mr="15px">
        <Heading
          as="h2"
          size="22px"
          color="#000000"
          textAlign="center"
          mb="40px">
          ¿Porqué te conviene cambiar tu lugar de trabajo?
        </Heading>

        <Stack spacing="32px">
          <Items
            alt="mayor creatividad"
            title="Mayor Creatividad"
            description="Lorem ipsum dolor sit ame"
          />

          <Items
            alt="experiencia"
            title="Experiencia"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Items
            alt="servicio excelente"
            title="Servicio Excelente"
            description="Lorem ipsum dolor"
          />
        </Stack>
      </Box>
    </>
  );
};

export default Benefits;
