import { Module } from '@nestjs/common';

import 'aws4';
import { MongooseModule } from '@nestjs/mongoose';
import * as normalize from 'normalize-mongoose';

import { PropertiesModule } from './modules/properties/properties.module';
import { AuthModule } from './modules/auth/auth.module';

console.log('process.env.MONGO_URL', process.env.MONGO_URL);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionFactory(connection) {
        connection.plugin(normalize);

        return connection;
      },
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryAttempts: 1,
    }),
    AuthModule,
    PropertiesModule,
  ],
})
export class AppModule {}
