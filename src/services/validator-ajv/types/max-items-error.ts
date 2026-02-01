import { ValidationErrorCommon } from './validation-error-common.js';

export type MaxItemsError = ValidationErrorCommon & {
  type: 'maxItems';
  limit: number;
};
