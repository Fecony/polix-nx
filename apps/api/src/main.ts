import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { PrismaService } from '@polix/prisma';
import { isEnv } from '@polix/shared/utils';
import helmet from 'helmet';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('app.port');

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  app.use(
    helmet({
      contentSecurityPolicy: isEnv('production') ? undefined : false,
    }),
  );

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}/graphql`);
  Logger.log(`Running in ${config.get<string>('app.env')} mode`);
}

bootstrap();
