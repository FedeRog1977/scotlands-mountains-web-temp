import { ValidationErrorCommon } from './validation-error-common.js';

export type DependentRequiredError = ValidationErrorCommon & {
  type: 'dependentRequired';
};
