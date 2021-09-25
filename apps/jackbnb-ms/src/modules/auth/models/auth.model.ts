import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

const required = true;
const unique = true;

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

@Schema({
  toJSON: {
    transform(_doc, body) {
      const { password, ...user } = body;

      return user;
    },
  },
})
export class User {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop({ required, unique })
  username: string;

  @Prop({ required, unique, validate: emailRegex })
  email: string;

  @Prop({ required })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
