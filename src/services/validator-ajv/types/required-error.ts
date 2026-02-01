import { ValidationErrorCommon } from './validation-error-common.js';

export type RequiredError = ValidationErrorCommon & {
  type: 'required';
};
