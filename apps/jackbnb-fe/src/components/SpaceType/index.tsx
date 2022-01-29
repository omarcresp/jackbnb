import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import CirclesImage, {CirclesImageProps} from './CirclesImage/circlesImage';

import zonasVerdesIcon from '../../assets/icon/space-types/zonas-verdes.svg';
import zonasUrbanasIcon from '../../assets/icon/space-types/zonas-urbanas.svg';
import zonasBibliotecaIcon from '../../assets/icon/space-types/zonas-biblioteca.svg';
import zonasOficinaIcon from '../../assets/icon/space-types/zonas-oficina.svg';
import zonasCoworkingIcon from '../../assets/icon/space-types/zonas-coworking.svg';
import zonasMar from '../../assets/icon/space-types/zonas-mar.svg';

import SpaceTypeStyles from './index.module.css';

const SPACE_TYPES: CirclesImageProps[] = [
  {alt: 'Zonas verdes', textImage: 'Zonas Verdes', imageUrl: zonasVerdesIcon.src},
  {alt: 'Zonas urbanas', textImage: 'Zonas Urbanas', imageUrl: zonasUrbanasIcon.src},
  {alt: 'Biblioteca', textImage: 'Biblioteca', imageUrl: zonasBibliotecaIcon.src},
  {alt: 'Oficina', textImage: 'Oficina', imageUrl: zonasOficinaIcon.src},
  {alt: 'Coworking', textImage: 'Coworking', imageUrl: zonasCoworkingIcon.src},
  {alt: 'Vista al mar', textImage: 'Vista al mar', imageUrl: zonasMar.src},
];

const SpaceType: FC = () => {
  return (
    <div className={SpaceTypeStyles.spaceTypeContainer}>
      <Box mt="47px" mb="24px">
        <Heading as="h3" fontSize="22px" mx="22px" color="#000000" textAlign="center">
          ¿Qué tipo de espacios estás buscando?
        </Heading>
      </Box>

      <ul className={SpaceTypeStyles.spaceTypeItems}>
        {SPACE_TYPES.map((spaceType) => (
          <li
            key={spaceType.textImage}
            className={SpaceTypeStyles.spaceTypeList}>
            <CirclesImage
              alt={spaceType.alt}
              textImage={spaceType.textImage}
              imageUrl={spaceType.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceType;
