import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import SpaceTypeStyles from './index.module.css';
import CirclesImage from './CirclesImage/circlesImage';

const SpaceType: FC = () => {
  const images = [
    {alt: 'Zonas verdes', textImage: 'Zonas Verdes'},
    {alt: 'Zonas urbanas', textImage: 'Zonas Urbanas'},
    {alt: 'Biblioteca', textImage: 'Biblioteca'},
    {alt: 'Oficina', textImage: 'Oficina'},
    {alt: 'Coworking', textImage: 'Coworking'},
  ];

  return (
    <div className={SpaceTypeStyles.myContainer}>
      <Box mt="47px" mb="24px">
        <Heading as="h2" size="22px" color="#000000" textAlign="center">
          ¿Qué espacio estás buscando?
        </Heading>
      </Box>
      <ul className={SpaceTypeStyles.myContainerItems}>
        {images.map((image) => (
          <li key={image.textImage} className={SpaceTypeStyles.list}>
            <CirclesImage alt={image.alt} textImage={image.textImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceType;
