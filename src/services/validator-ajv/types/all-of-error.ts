import { ValidationErrorCommon } from './validation-error-common.js';

export type AllOfError = ValidationErrorCommon & {
  type: 'allOf';
};
