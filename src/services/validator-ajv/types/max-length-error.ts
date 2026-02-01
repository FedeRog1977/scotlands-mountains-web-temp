import { ValidationErrorCommon } from './validation-error-common.js';

export type MaxLengthError = ValidationErrorCommon & {
  type: 'maxLength';
  limit: number;
};
