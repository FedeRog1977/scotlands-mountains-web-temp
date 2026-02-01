import { ValidationErrorCommon } from './validation-error-common.js';

export type MinPropertiesError = ValidationErrorCommon & {
  type: 'minProperties';
  limit: number;
};
