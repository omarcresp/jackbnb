import {
  IsEnum,
  IsString,
  IsNumber,
  IsLatitude,
  IsLongitude,
} from 'class-validator';

import { Property } from '../entities/property.entity';

enum ROOM_TYPES {
  ENTIRE = 'Entire home/apt',
  PRIVATE = 'Private room',
  SHARED = 'Shared room',
}

enum PROPERTY_TYPES {
  HOUSE = 'Entire house',
  APARTMENT = 'Entire apartment',
  CONDOMINIUM = 'Entire condominium',
  PRIVATE_IN_HOUSE = 'Private room in house',
  PRIVATE_IN_APARTMENT = 'Private room in apartment',
  PRIVATE_IN_CONDOMINIUM = 'Private room in condominium',
  GUEST_SUITE = 'Entire guest suite',
  GUEST_HOUSE = 'Entire guest house',
  SERVICED_APARTMENT = 'Entire serviced apartment',
  BUNGALOW = 'Entire bungalow',
  COTTAGE = 'Entire cottage',
  PRIVATE_IN_BUNGALOW = 'Private room in bungalow',
  BOUTIQUE_HOTEL = 'Room in boutique hotel',
  TINY_HOUSE = 'Tiny house',
  ENTIRE_VILLA = 'Entire villa',
}

export class CreatePropertyDto implements Partial<Property> {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  minimum_nights: number;

  @IsNumber()
  maximum_nights: number;

  @IsNumber()
  @IsLatitude()
  latitude: number;

  @IsNumber()
  @IsLongitude()
  longitude: number;

  @IsNumber()
  bathrooms: number;

  @IsNumber()
  bedrooms: number;

  @IsNumber()
  beds: number;

  @IsString()
  neighbourhood: string;

  @IsString({ each: true })
  amenities: string[];

  @IsEnum(ROOM_TYPES)
  room_type: ROOM_TYPES;

  @IsEnum(PROPERTY_TYPES)
  property_type: PROPERTY_TYPES;
}
