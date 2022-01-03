import { registerAs } from '@nestjs/config';
import { env } from '../utils';

export default registerAs('database', () => ({
  connection: env('DB_CONNECTION', 'mysql'),
  host: env('DB_HOST', 'localhost'),
  port: parseInt(env('DB_PORT', 3306), 10),
  name: env('DB_DATABASE'),
  username: env('DB_USERNAME'),
  password: env('DB_PASSWORD'),
}));
