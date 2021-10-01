import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import * as normalize from 'normalize-mongoose';

import { AuthModule } from './modules/auth/auth.module';
import { PropertiesModule } from './modules/properties/properties.module';

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_SESSION_TOKEN,
  MONGO_CLUSTER,
  MONGO_DATABASE,
  MONGO_PARAMS,
  IS_OFFLINE,
  MONGO_URL,
} = process.env;

const awsUser = `${encodeURIComponent(AWS_ACCESS_KEY_ID)}:${encodeURIComponent(AWS_SECRET_ACCESS_KEY)}`
const mongoUri = `${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?${MONGO_PARAMS}`
const awsUrl = `mongodb+srv://${awsUser}@${mongoUri}:${encodeURIComponent(AWS_SESSION_TOKEN)}`;
const mongoUrl = IS_OFFLINE === 'true' ? MONGO_URL : awsUrl;

console.log('mongoUrl', mongoUrl);

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl, {
      connectionFactory(connection) {
        connection.plugin(normalize);

        return connection;
      },
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    AuthModule,
    PropertiesModule,
  ],
})
export class AppModule {}
