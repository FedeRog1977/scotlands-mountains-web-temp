import { SpecificValidationError } from '../types/specific-validation-error.js';

export class ValidationError extends Error {
  public errors: SpecificValidationError[];

  public constructor(errors: SpecificValidationError[]) {
    super('Validation error');

    this.errors = errors;
    this.name = 'ValidationError';
  }
}
