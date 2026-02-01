import { ValidationErrorCommon } from './validation-error-common.js';

export type UnknownError = ValidationErrorCommon & {
  type: 'unknown';
};
