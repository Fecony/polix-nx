/**
 * Get environment variable
 *
 * @param envKey - environment variable key
 * @param defaultValue - default value
 *
 * @returns environment variable value or default value
 */
export function env(envKey: string, defaultValue?: string | number) {
  return process.env[envKey] || defaultValue;
}

/**
 * Check if the current environment is one of the given ones
 *
 * @param {string[]} env - Environments to check
 *
 * @returns {boolean} True if the current environment is one of the given ones
 */
export const isEnv = (...env: string[]): boolean => {
  return env.some((e) => e === process.env.NODE_ENV);
};
