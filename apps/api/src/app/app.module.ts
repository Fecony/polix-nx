import { Module } from '@nestjs/common';
import { CoreModule } from '@polix/core';
import { PrismaModule } from '@polix/prisma';

@Module({
  imports: [CoreModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
