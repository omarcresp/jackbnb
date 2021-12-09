import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import Items from './Items';
import BenefitsStyle from './index.module.css';

const ITEMS = [
  {
    alt: 'mayor creatividad',
    title: 'Mayor Creatividad',
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    alt: 'experiencia',
    title: 'Experiencia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    alt: 'servicio excelente',
    title: 'Servicio Excelente',
    description: 'Lorem ipsum dolor',
  },
];

const Benefits: FC = () => {

  return (
    <>
      <Box m="44px 15px 0px 15px">
        <Heading
          as="h2"
          size="22px"
          color="#000000"
          textAlign="center"
          mb="40px">
          ¿Porqué te conviene cambiar tu lugar de trabajo?
        </Heading>
        
        <ul>
          {ITEMS.map((ITEM) => (
            <li key={ITEM.title} className={BenefitsStyle.itemsList}>
              <Items
                alt={ITEM.alt}
                title={ITEM.title}
                description={ITEM.description}
              />
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default Benefits;
