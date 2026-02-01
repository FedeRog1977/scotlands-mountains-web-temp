import { ValidationErrorCommon } from './validation-error-common.js';

export type IfError = ValidationErrorCommon & {
  type: 'if';
};
