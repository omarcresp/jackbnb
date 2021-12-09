import React, {FC} from 'react';
import {Heading, Box} from '@chakra-ui/react';

import Items from './Items';
import BenefitsStyle from './index.module.css';

const items = [
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
      <Box mt="44px" ml="15px" mr="15px">
        <Heading
          as="h2"
          size="22px"
          color="#000000"
          textAlign="center"
          mb="40px">
          ¿Porqué te conviene cambiar tu lugar de trabajo?
        </Heading>
        <ul>
          {items.map((item) => (
            <li key={item.title} className={BenefitsStyle.itemsList}>
              <Items
                alt={item.alt}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default Benefits;
