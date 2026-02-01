import { ValidationErrorCommon } from './validation-error-common.js';

export type OneOfError = ValidationErrorCommon & {
  type: 'oneOf';
};
