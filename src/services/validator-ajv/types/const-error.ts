import { ValidationErrorCommon } from './validation-error-common.js';

export type ConstError = ValidationErrorCommon & {
  type: 'const';
  allowedValue: unknown;
};
