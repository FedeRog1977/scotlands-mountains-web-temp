// import corePlugin from 'eslint-plugin-jest';
// import domPlugin from 'eslint-plugin-jest-dom';
import coreRules from './rules/core.js';
import domRules from './rules/dom.js';
import unnecessaryRules from './rules/unnecessary.js';

export default {
  plugins: {
    // jest: corePlugin,
    // 'jest-dom': domPlugin,
  },
  rules: {
    ...coreRules,
    ...domRules,
    ...unnecessaryRules,
  },
};
