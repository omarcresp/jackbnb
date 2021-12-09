import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import SpaceTypeStyles from './index.module.css';
import CirclesImage from './CirclesImage/circlesImage';

const images = [
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
        {images.map((image) => (
          <li key={image.textImage} className={SpaceTypeStyles.spaceTypeList}>
            <CirclesImage alt={image.alt} textImage={image.textImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceType;
