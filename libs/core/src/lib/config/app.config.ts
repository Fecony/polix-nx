import { registerAs } from '@nestjs/config';
import { env } from '../utils';

export default registerAs('app', () => ({
  env: env('APP_ENV', 'development'),
  port: parseInt(env('PORT', 3000), 10),
}));
