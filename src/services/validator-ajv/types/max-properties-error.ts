import { ValidationErrorCommon } from './validation-error-common.js';

export type MaxPropertiesError = ValidationErrorCommon & {
  type: 'maxProperties';
  limit: number;
};
