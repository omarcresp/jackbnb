import { Module } from '@nestjs/common';

import 'aws4';
import { MongooseModule } from '@nestjs/mongoose';
import * as normalize from 'normalize-mongoose';

import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL ?? '', {
      connectionFactory(connection) {
        connection.plugin(normalize);

        return connection;
      },
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryAttempts: 1,
    }),
    PropertiesModule,
  ],
})
export class AppModule {}
