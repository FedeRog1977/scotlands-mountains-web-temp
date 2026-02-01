import { ValidationErrorCommon } from './validation-error-common.js';

export type ExclusiveMinimumError = ValidationErrorCommon & {
  type: 'exclusiveMinimum';
  limit: number;
};
