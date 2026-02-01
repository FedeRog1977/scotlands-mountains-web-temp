import { AdditionalPropertiesError } from './additional-properties-error.js';
import { AllOfError } from './all-of-error.js';
import { AnyOfError } from './any-of-error.js';
import { ConstError } from './const-error.js';
import { DependentRequiredError } from './dependent-required-error.js';
import { DependentSchemasError } from './dependent-schemas-error.js';
import { EnumError } from './enum-error.js';
import { ExclusiveMaximumError } from './exclusive-maximum-error.js';
import { ExclusiveMinimumError } from './exclusive-minimum-error.js';
import { IfError } from './if-error.js';
import { MaxItemsError } from './max-items-error.js';
import { MaxLengthError } from './max-length-error.js';
import { MaxPropertiesError } from './max-properties-error.js';
import { MaximumError } from './maximum-error.js';
import { MinItemsError } from './min-items-error.js';
import { MinLengthError } from './min-length-error.js';
import { MinPropertiesError } from './min-properties-error.js';
import { MinimumError } from './minimum-error.js';
import { MultipleOfError } from './multiple-of-error.js';
import { NotError } from './not-error.js';
import { OneOfError } from './one-of-error.js';
import { PatternError } from './pattern-error.js';
import { PropertiesError } from './properties-error.js';
import { RequiredError } from './required-error.js';
import { TypeError } from './type-error.js';
import { UniqueItemsError } from './unique-items-error.js';
import { UnknownError } from './unknown-error.js';

export type SpecificValidationError =
  | AdditionalPropertiesError
  | AllOfError
  | AnyOfError
  | ConstError
  | DependentRequiredError
  | DependentSchemasError
  | EnumError
  | ExclusiveMaximumError
  | ExclusiveMinimumError
  | IfError
  | MaxItemsError
  | MaxLengthError
  | MaxPropertiesError
  | MaximumError
  | MinItemsError
  | MinLengthError
  | MinPropertiesError
  | MinimumError
  | MultipleOfError
  | NotError
  | OneOfError
  | PatternError
  | PropertiesError
  | RequiredError
  | TypeError
  | UniqueItemsError
  | UnknownError;
