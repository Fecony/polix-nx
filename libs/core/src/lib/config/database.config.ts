import { registerAs } from '@nestjs/config';
import { env } from '@polix/shared/utils';

export default registerAs('database', () => ({
  connection: env('DB_CONNECTION', 'mysql'),
  host: env('DB_HOST', 'localhost'),
  port: parseInt(env('DB_PORT', 3306) as string, 10),
  name: env('DB_DATABASE'),
  username: env('DB_USERNAME'),
  password: env('DB_PASSWORD'),
  url: env('DB_URL'),
}));
