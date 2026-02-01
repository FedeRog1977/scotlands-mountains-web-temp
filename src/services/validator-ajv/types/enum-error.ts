import { ValidationErrorCommon } from './validation-error-common.js';

export type EnumError = ValidationErrorCommon & {
  type: 'enum';
  allowedValues: unknown[];
};
