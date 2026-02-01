import { ValidationErrorCommon } from './validation-error-common.js';

export type MinItemsError = ValidationErrorCommon & {
  type: 'minItems';
  limit: number;
};
