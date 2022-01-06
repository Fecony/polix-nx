import { registerAs } from '@nestjs/config';
import { env } from '@polix/shared/utils';

export default registerAs('app', () => ({
  env: env('NODE_ENV', 'development'),
  port: parseInt(env('PORT', 3000) as string, 10),
}));
