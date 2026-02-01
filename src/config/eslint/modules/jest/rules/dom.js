export default {
  /**
   * Prefer toBeChecked over checking attributes.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-checked': 'error',

  /**
   * Prefer toBeEmpty over checking innerHTML.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-empty': 'error',

  /**
   * Prefer toBeDisabled or toBeEnabled over checking attributes.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-enabled-disabled': 'error',

  /**
   * Prefer toHaveFocus over checking document.activeElement.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-focus': 'error',

  /**
   * Prefer .toBeInTheDocument() for asserting the existence of a DOM node.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-in-document': 'error',

  /**
   * Prefer toBeRequired over checking properties.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-required': 'error',

  /**
   * Prefer toHaveAttribute over checking getAttribute/hasAttribute.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-to-have-attribute': 'error',

  /**
   * Prefer toHaveClass over checking element className.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-to-have-class': 'error',

  /**
   * Prefer toHaveStyle over checking element style.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-to-have-style': 'error',

  /**
   * Prefer toHaveTextContent over checking element.textContent.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-to-have-text-content': 'error',

  /**
   * Prefer toHaveValue over checking element.value.
   *
   * Recommended: Yes
   *
   * See: https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
   *
   * Rationale: Built-in matchers improve readability and prevent false positives.
   */
  'jest-dom/prefer-to-have-value': 'error',
};
