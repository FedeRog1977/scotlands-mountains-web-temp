import { DefinedError } from '../forks/ajv.js';
import { SpecificValidationError } from '../types/specific-validation-error.js';

export const mapValidationError = (validationError: DefinedError): SpecificValidationError => {
  const commonProperties = {
    path: validationError.instancePath,
  };

  switch (validationError.keyword) {
    case 'additionalProperties':
      return {
        ...commonProperties,
        type: 'additionalProperties',
      };

    case 'anyOf':
      return {
        ...commonProperties,
        type: 'anyOf',
      };

    case 'const':
      return {
        ...commonProperties,
        type: 'const',
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        allowedValue: validationError.params.allowedValue as unknown,
      };

    case 'dependentRequired':
      return {
        ...commonProperties,
        type: 'dependentRequired',
      };

    case 'enum':
      return {
        ...commonProperties,
        type: 'enum',
        allowedValues: validationError.params.allowedValues,
      };

    case 'exclusiveMaximum':
      return {
        ...commonProperties,
        type: 'exclusiveMaximum',
        limit: validationError.params.limit,
      };

    case 'exclusiveMinimum':
      return {
        ...commonProperties,
        type: 'exclusiveMinimum',
        limit: validationError.params.limit,
      };

    case 'if':
      return {
        ...commonProperties,
        type: 'if',
      };

    case 'maxItems':
      return {
        ...commonProperties,
        type: 'maxItems',
        limit: validationError.params.limit,
      };

    case 'maxLength':
      return {
        ...commonProperties,
        type: 'maxLength',
        limit: validationError.params.limit,
      };

    case 'maxProperties': {
      return {
        ...commonProperties,
        type: 'maxProperties',
        limit: validationError.params.limit,
      };
    }

    case 'maximum':
      return {
        ...commonProperties,
        type: 'maximum',
        limit: validationError.params.limit,
      };

    case 'minItems':
      return {
        ...commonProperties,
        type: 'minItems',
        limit: validationError.params.limit,
      };

    case 'minLength':
      return {
        ...commonProperties,
        type: 'minLength',
        limit: validationError.params.limit,
      };

    case 'minProperties': {
      return {
        ...commonProperties,
        type: 'minProperties',
        limit: validationError.params.limit,
      };
    }

    case 'minimum':
      return {
        ...commonProperties,
        type: 'minimum',
        limit: validationError.params.limit,
      };

    case 'multipleOf':
      return {
        ...commonProperties,
        type: 'multipleOf',
        multipleOf: validationError.params.multipleOf,
      };

    case 'not':
      return {
        ...commonProperties,
        type: 'not',
      };

    case 'oneOf':
      return {
        ...commonProperties,
        type: 'oneOf',
      };

    case 'pattern':
      return {
        ...commonProperties,
        type: 'pattern',
        pattern: validationError.params.pattern,
      };

    case 'required':
      return {
        ...commonProperties,
        path: `${commonProperties.path}/${validationError.params.missingProperty}`,
        type: 'required',
      };

    case 'type':
      return {
        ...commonProperties,
        type: 'type',
        expectedType: validationError.params.type,
      };

    case 'uniqueItems':
      return {
        ...commonProperties,
        type: 'uniqueItems',
      };

    default:
      return {
        ...commonProperties,
        type: 'unknown',
      };
  }
};
