import { ValidationErrorCommon } from './validation-error-common.js';

export type PatternError = ValidationErrorCommon & {
  type: 'pattern';
  pattern: string;
};
