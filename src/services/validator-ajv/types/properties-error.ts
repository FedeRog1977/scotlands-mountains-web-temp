import { ValidationErrorCommon } from './validation-error-common.js';

export type PropertiesError = ValidationErrorCommon & {
  type: 'properties';
};
