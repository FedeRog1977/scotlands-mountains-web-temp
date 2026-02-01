import { ValidationErrorCommon } from './validation-error-common.js';

export type DependentSchemasError = ValidationErrorCommon & {
  type: 'dependentSchemas';
};
