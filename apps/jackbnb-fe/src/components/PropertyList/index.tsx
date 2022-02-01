import React, {FC} from 'react';
import {Flex} from '@chakra-ui/react';

import PropertyCard from '../PropertyCard';
import PropertyListStyle from './index.module.css';

const PROPETIES = [
  {
    alt: 'Bulding image',
    persons: '1-5',
    distance: '15 km',
    title: 'Hacienda 1',
    location: 'Envigado, Antioquia',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis',
  },
  {
    alt: 'Bulding image 2',
    persons: '1-6',
    distance: '10 km',
    title: 'Hacienda 2',
    location: 'Envigado, Antioquia',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis',
  },
  {
    alt: 'Bulding image 3',
    persons: '1-4',
    distance: '20 km',
    title: 'Hacienda 3',
    location: 'Envigado, Antioquia',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis',
  },
];

const PropertyList: FC = () => {
  return (
    <Flex justify="center">
      <ul>
        {PROPETIES.map((properties) => (
          <li key={properties.title} className={PropertyListStyle.itemsList}>
            <PropertyCard
              alt={properties.alt}
              persons={properties.persons}
              distance={properties.distance}
              title={properties.title}
              location={properties.location}
              description={properties.description}
            />
          </li>
        ))}
      </ul>
    </Flex>
  );
};

export default PropertyList;
