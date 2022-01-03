export const env = (keyValue: string, defaultValue?: any) => {
  return process.env[keyValue] || defaultValue;
};
