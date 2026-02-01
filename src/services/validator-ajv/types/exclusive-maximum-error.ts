import { ValidationErrorCommon } from './validation-error-common.js';

export type ExclusiveMaximumError = ValidationErrorCommon & {
  type: 'exclusiveMaximum';
  limit: number;
};
