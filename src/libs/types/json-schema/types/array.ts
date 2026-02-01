import { SchemaInternal } from './schema-internal.js';
import { SchemaBase } from './schema-base.js';

export type ArraySchema<T, PartialMode extends boolean> = SchemaBase<'array', T[]> & {
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  items: SchemaInternal<T, PartialMode>;
};
