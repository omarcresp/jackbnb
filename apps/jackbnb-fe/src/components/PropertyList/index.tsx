import React, {FC} from 'react';
import {Flex} from '@chakra-ui/react';

import PropertyCard from '../PropertyCard';
import PropertyListStyle from './index.module.css';

const PROPERTIES = [
  {
    id: '1',
    alt: 'Building image',
    pc_min: '1',
    pc_max: '5',
    distance: '15 km',
    name: 'Hacienda 1',
    location: 'Envigado, Antioquia',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis',
  },
  {
    id: '2',
    alt: 'Building image 2',
    pc_min: '1',
    pc_max: '6',
    distance: '10 km',
    name: 'Hacienda 2',
    location: 'Envigado, Antioquia',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis',
  },
  {
    id: '3',
    alt: 'Building image 3',
    pc_min: '1',
    pc_max: '4',
    distance: '20 km',
    name: 'Hacienda 3',
    location: 'Envigado, Antioquia',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis',
  },
];

const PropertyList: FC = () => {
  return (
    <Flex justify="center">
      <ul>
        {PROPERTIES.map((properties) => (
          <li key={properties.id} className={PropertyListStyle.itemsList}>
            <PropertyCard
              alt={properties.alt}
              pc_min={properties.pc_min}
              pc_max={properties.pc_max}
              distance={properties.distance}
              name={properties.name}
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
