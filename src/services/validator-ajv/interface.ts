import { JSONSchema } from '~/libs/types';
import { ValidateOptions } from './types/validate-options.js';

export interface Interface {
  validate: <T>(data: unknown, schema: JSONSchema<T>, options?: ValidateOptions) => Promise<T>;
}
