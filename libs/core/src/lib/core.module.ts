import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/auth.config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { validationSchema } from './config/validation';
import { GraphQLModule } from '@nestjs/graphql';
import { CoreResolver } from './core.resolver';
import { isEnv } from '@polix/shared/utils';

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
    GraphQLModule.forRoot({
      sortSchema: true,
      autoSchemaFile: isEnv('production') ? true : 'graphql/schema.gql',
    }),
  ],
  controllers: [],
  providers: [CoreResolver],
  exports: [],
})
export class CoreModule {}
