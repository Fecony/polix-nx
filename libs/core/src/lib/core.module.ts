import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/auth.config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { validationSchema } from './config/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      validationSchema,
      load: [appConfig, databaseConfig, authConfig],
      validationOptions: {
        abortEarly: true,
      },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
