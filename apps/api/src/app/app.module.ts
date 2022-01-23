import { Module } from '@nestjs/common';
import { CoreModule } from '@polix/core';
import { CountryModule } from '@polix/country';
import { PrismaModule } from '@polix/prisma';

@Module({
  imports: [CoreModule, PrismaModule, CountryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
