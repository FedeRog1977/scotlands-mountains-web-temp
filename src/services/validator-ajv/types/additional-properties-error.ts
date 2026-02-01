import { ValidationErrorCommon } from './validation-error-common.js';

export type AdditionalPropertiesError = ValidationErrorCommon & {
  type: 'additionalProperties';
};
