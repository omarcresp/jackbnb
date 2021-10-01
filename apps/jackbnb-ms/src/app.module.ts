import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import * as normalize from 'normalize-mongoose';

import { AuthModule } from './modules/auth/auth.module';
import { PropertiesModule } from './modules/properties/properties.module';

console.log('process.env', process.env)

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, {
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
