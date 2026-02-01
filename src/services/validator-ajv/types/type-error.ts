import { ValidationErrorCommon } from './validation-error-common.js';

export type TypeError = ValidationErrorCommon & {
  type: 'type';
  expectedType: string;
};
