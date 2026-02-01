export default {
  /**
   * Enforces the Rules of Hooks.
   *
   * See: https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
   *
   * Rationale: Ensuring that hooks are used correctly according the React standards makes usage of
   *            hooks safer and more reliable.
   */
  'react-hooks/rules-of-hooks': 'error',

  /**
   * Verifies the list of dependencies for Hooks like useEffect and similar.
   *
   * See: https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
   *
   * Rationale: Ensuring dependencies are correctly listed makes usage of hooks safer and more
   *            realiable.
   */
  'react-hooks/exhaustive-deps': 'error',
};
