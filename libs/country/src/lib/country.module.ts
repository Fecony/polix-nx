import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';
import { PrismaModule } from '@polix/prisma';

@Module({
  imports: [PrismaModule],
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}
