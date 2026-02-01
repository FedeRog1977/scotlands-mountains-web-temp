import _ajvErrors from 'ajv-errors';
import { fixDefaultImport } from '../utils/fix-default-imports.js';

const ajvErrors: typeof _ajvErrors.default = fixDefaultImport(_ajvErrors);

export { ajvErrors };
export * from 'ajv-errors';
