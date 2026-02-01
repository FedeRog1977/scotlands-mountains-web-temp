import _Ajv from 'ajv/dist/2020.js';
import { fixDefaultImport } from '../utils/fix-default-imports.js';

const Ajv = fixDefaultImport(_Ajv);

export { Ajv };
export * from 'ajv/dist/2020.js';
