import plugin from 'eslint-plugin-testing-library';

import rules from './rules/core.js';

export default {
  plugins: {
    'testing-library': plugin,
  },
  rules,
};
