import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { paginationPipeline } from '@jackbnb/paginate';

import { Document } from 'mongoose';

@Schema()
export class Property {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  picture_url: string;

  @Prop()
  property_type: string;

  @Prop()
  beds: number;

  @Prop()
  bedrooms: number;

  @Prop()
  bathrooms: number;

  @Prop()
  room_type: string;

  @Prop()
  review_scores_rating: number;

  @Prop()
  number_of_reviews: number;

  @Prop()
  neighbourhood: string;

  @Prop()
  amenities: string[];

  @Prop()
  minimum_nights: number;

  @Prop()
  maximum_nights: number;

  @Prop()
  longitude: number;

  @Prop()
  latitude: number;

  @Prop()
  host: string;
}

export const PropertySchema = SchemaFactory.createForClass(Property).method(
  'paginate',
  paginationPipeline,
);

export type PropertyDocument = Property & Document;
