export default {
  /**
   * Disallow JSX prop spreading.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
   *
   * Rationale: Props spreading is useful in stories.
   */
  'react/jsx-props-no-spreading': 'off',

  /**
   * Enforce consistent usage of type assertions.
   *
   * See: https://typescript-eslint.io/rules/consistent-type-assertions
   *
   * Rationale: Type assertions are useful in stories.
   */
  '@typescript-eslint/consistent-type-assertions': 'off',

  /**
   * Disallow unused variables.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unused-vars
   *
   * Rationale: It can be useful to deconstruct props in order to discard them.
   */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
};
