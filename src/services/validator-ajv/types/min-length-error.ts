import { ValidationErrorCommon } from './validation-error-common.js';

export type MinLengthError = ValidationErrorCommon & {
  type: 'minLength';
  limit: number;
};
