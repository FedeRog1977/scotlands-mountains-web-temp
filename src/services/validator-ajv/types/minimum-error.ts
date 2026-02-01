import { ValidationErrorCommon } from './validation-error-common.js';

export type MinimumError = ValidationErrorCommon & {
  type: 'minimum';
  limit: number;
};
