import { ValidationErrorCommon } from './validation-error-common.js';

export type MaximumError = ValidationErrorCommon & {
  type: 'maximum';
  limit: number;
};
