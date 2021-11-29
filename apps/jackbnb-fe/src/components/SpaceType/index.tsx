import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import SpaceTypeStyles from './index.module.css';
import CirclesImage from './CirclesImage/circlesImage';

const SpaceType: FC = () => {
  return (
    <div className={SpaceTypeStyles.myContainer}>
      <Box mt="47px" mb="24px">
        <Heading as="h2" size="22px" color="#000000" textAlign="center">
          ¿Qué espacio estás buscando?
        </Heading>
      </Box>

      <div className={SpaceTypeStyles.myContainer_items}>
        <CirclesImage alt="zona verde" textImage="Zonas Verdes" />

        <CirclesImage alt="zona urbana" textImage="Zonas Urbanas" />

        <CirclesImage alt="biblioteca" textImage="Biblioteca" />

        <CirclesImage alt="oficina" textImage="Oficina" />

        <CirclesImage alt="coworking" textImage="Coworking" />
      </div>
    </div>
  );
};

export default SpaceType;
