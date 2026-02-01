import { ValidationErrorCommon } from './validation-error-common.js';

export type UniqueItemsError = ValidationErrorCommon & {
  type: 'uniqueItems';
};
