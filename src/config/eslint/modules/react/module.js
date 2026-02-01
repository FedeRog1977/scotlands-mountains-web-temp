import corePlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

import coreRules from './rules/core.js';
import hooksRules from './rules/hooks.js';

export default {
  plugins: {
    react: corePlugin,
    'react-hooks': hooksPlugin,
  },
  rules: {
    ...coreRules,
    ...hooksRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
