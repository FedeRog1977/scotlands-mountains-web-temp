export default {
  /**
   * Disallow JSX prop spreading.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
   *
   * Rationale: Props spreading is useful in tests.
   */
  'react/jsx-props-no-spreading': 'off',

  /**
   * Disallow multiple component definition per file.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
   *
   * Rationale: Test components can be useful.
   */
  'react/no-multi-comp': 'off',

  /**
   * Enforce consistent usage of type assertions.
   *
   * See: https://typescript-eslint.io/rules/consistent-type-assertions
   *
   * Rationale: Type assertions are useful in tests.
   */
  '@typescript-eslint/consistent-type-assertions': 'off',
};
