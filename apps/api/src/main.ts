/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const port = config.get<number>('app.port');

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}/graphql`);
  Logger.log(`Running in ${config.get<string>('app.env')} mode`);
}

bootstrap();
