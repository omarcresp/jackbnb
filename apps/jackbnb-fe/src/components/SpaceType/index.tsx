import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import SpaceTypeStyles from './index.module.css';
import CirclesImage from './CirclesImage/circlesImage';

const IMAGES = [
  {alt: 'Zonas verdes', textImage: 'Zonas Verdes'},
  {alt: 'Zonas urbanas', textImage: 'Zonas Urbanas'},
  {alt: 'Biblioteca', textImage: 'Biblioteca'},
  {alt: 'Oficina', textImage: 'Oficina'},
  {alt: 'Coworking', textImage: 'Coworking'},
];

const SpaceType: FC = () => {
 
  return (
    <div className={SpaceTypeStyles.spaceTypeContainer}>
      <Box mt="47px" mb="24px">
        <Heading as="h2" size="22px" color="#000000" textAlign="center">
          ¿Qué espacio estás buscando?
        </Heading>
      </Box>
      
      <ul className={SpaceTypeStyles.spaceTypeItems}>
        {IMAGES.map((IMAGE) => (
          <li key={IMAGE.textImage} className={SpaceTypeStyles.spaceTypeList}>
            <CirclesImage alt={IMAGE.alt} textImage={IMAGE.textImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceType;
