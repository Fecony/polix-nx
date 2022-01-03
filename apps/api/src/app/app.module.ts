import { Module } from '@nestjs/common';
import { CoreModule } from '@polix/core';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
