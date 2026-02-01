import { ValidationErrorCommon } from './validation-error-common.js';

export type NotError = ValidationErrorCommon & {
  type: 'not';
};
