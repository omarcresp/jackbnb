import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import Items from '../Items';

import creatividadIcon from '../../assets/icon/benefits/creatividad.svg';
import experienciaIcon from '../../assets/icon/benefits/experiencia.svg';
import servicioIcon from '../../assets/icon/benefits/servicio.svg';
import BenefitsStyle from './index.module.css';

const BENEFIT_ITEMS = [
  {
    alt: 'mayor creatividad',
    title: 'Mayor Creatividad',
    description: 'Lorem ipsum dolor sit amet te eleifend',
    imageUrl: creatividadIcon.src,
  },
  {
    alt: 'experiencia',
    title: 'Experiencia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imageUrl: experienciaIcon.src,
  },
  {
    alt: 'servicio excelente',
    title: 'Servicio Excelente',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl: servicioIcon.src,
  },
];

const Benefits: FC = () => {
  return (
    <>
      <Box mt="32px" mx="15px">
        <Heading
          as="h3"
          fontSize="22px"
          mx="7px"
          color="#000000"
          textAlign="center"
          mb="40px">
          ¿Porqué te conviene cambiar tu lugar de trabajo?
        </Heading>

        <ul>
          {BENEFIT_ITEMS.map((benefitItem) => (
            <li key={benefitItem.title} className={BenefitsStyle.itemsList}>
              <Items
                alt={benefitItem.alt}
                title={benefitItem.title}
                description={benefitItem.description}
                imageUrl={benefitItem.imageUrl}
              />
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default Benefits;
