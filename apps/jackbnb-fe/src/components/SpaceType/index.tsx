import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import SpaceTypeStyles from './index.module.css';
import CirclesImage from './CirclesImage/circlesImage';

const SPACETYPEIMAGES = [
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
        {SPACETYPEIMAGES.map((SPACETYPEIMAGE) => (
          <li
            key={SPACETYPEIMAGE.textImage}
            className={SpaceTypeStyles.spaceTypeList}>
            <CirclesImage
              alt={SPACETYPEIMAGE.alt}
              textImage={SPACETYPEIMAGE.textImage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceType;
