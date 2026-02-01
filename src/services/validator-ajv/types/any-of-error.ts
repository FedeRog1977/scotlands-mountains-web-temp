import { ValidationErrorCommon } from './validation-error-common.js';

export type AnyOfError = ValidationErrorCommon & {
  type: 'anyOf';
};
