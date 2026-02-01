import { ValidationErrorCommon } from './validation-error-common.js';

export type MultipleOfError = ValidationErrorCommon & {
  type: 'multipleOf';
  multipleOf: number;
};
