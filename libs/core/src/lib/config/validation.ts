import * as Joi from 'joi';

export const validationSchema = Joi.object({
  APP_ENV: Joi.string().valid('development', 'production', 'staging', 'test').required().default('development'),
  PORT: Joi.number().default(3000),
  DB_CONNECTION: Joi.string().required().default('mysql'),
  DB_HOST: Joi.string().required().default('localhost'),
  DB_PORT: Joi.number().required().default('3306'),
  DB_DATABASE: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
});
