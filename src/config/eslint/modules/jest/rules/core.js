export default {
  /**
   * Enforce test and it usage conventions.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
   *
   * Rationale: Improves code consistency.
   */
  'jest/consistent-test-it': 'error',

  /**
   * Enforce assertion to be made in a test body.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
   *
   * Rationale: Requiring assertions ensure every test actually tests something and also makes it
   *            clear what's being tested.
   */
  'jest/expect-expect': 'error',

  /**
   * Enforces a maximum number assertion calls in a test body.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
   *
   * Rationale: This should be left to developer discretion.
   */
  'jest/max-expects': 'off',

  /**
   * Enforces a maximum depth to nested describe calls.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
   *
   * Rationale: Excessive nesting makes tests hard to read. A single top-level describe is preferred
   *            but one level of nesting is useful in some cases.
   *
  'jest/max-nested-describe': ['error', { max: 2 }],

  /**
   * Disallow alias methods.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
   *
   * Rationale: Ensures consistency and prepares for aliases being removed in a future release.
   */
  'jest/no-alias-methods': 'error',

  /**
   * Disallow commented out tests.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
   *
   * Rationale: Tests should either be fixed if still relevant or removed if no longer needed.
   */
  'jest/no-commented-out-tests': 'error',

  /**
   * Disallow calling expect conditionally.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
   *
   * Rationale: Conditional assertions can be skipped, resulting in a passing test.
   */
  'jest/no-conditional-expect': 'error',

  /**
   * Disallow conditional logic in tests.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
   *
   * Rationale: Conditional logic is a sign that a test is doing too much. Split it into multiple
   *            tests instead.
   */
  'jest/no-conditional-in-test': 'error',

  /**
   * Disallow use of deprecated functions.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
   *
   * Rationale: Deprecated functions shouldn't be used as they could be removed at any time.
   */
  'jest/no-deprecated-functions': 'error',

  /**
   * Disallow disabled tests.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
   *
   * Rationale: Tests should either be fixed if still relevant or removed if no longer needed.
   */
  'jest/no-disabled-tests': 'error',

  /**
   * Disallow using a callback in asynchronous tests and hooks.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
   *
   * Rationale: The done callback is no longer recommended as it is error-prone.
   */
  'jest/no-done-callback': 'error',

  /**
   * Disallow duplicate setup and teardown hooks.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
   *
   * Rationale: Duplicate hooks can be easy to miss. Group everything together instead.
   */
  'jest/no-duplicate-hooks': 'error',

  /**
   * Disallow using exports in files containing tests.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
   *
   * Rationale: Importing from a test file causes those tests to run. Keep shared helper functions
   *            and data in a separate file instead.
   */
  'jest/no-export': 'error',

  /**
   * Disallow focused tests.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
   *
   * Rationale: Focused tests should never be committed as they cause other tests to be skipped.
   */
  'jest/no-focused-tests': 'error',

  /**
   * Disallow setup and teardown hooks.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
   *
   * Rationale: Setup and teardown hooks promote sharing state between tests. Instead, perform setup
   *            and teardown inside each test, or use helper functions which are explicitly called.
   */
  // 'jest/no-hooks': 'error',

  /**
   * Disallow identical titles.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
   *
   * Rationale: Identical tests titles are confusing, each should be unique.
   */
  'jest/no-identical-title': 'error',

  /**
   * Disallow string interpolation inside snapshots.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
   *
   * Rationale: Interpolation prevents snapshots from being updated.
   */
  'jest/no-interpolation-in-snapshots': 'error',

  /**
   * Disallow Jasmine globals.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
   *
   * Rationale: Most Jasmine functionality has been ported to Jest and Jasmine globals will stop
   *            working in the future.
   */
  'jest/no-jasmine-globals': 'error',

  /**
   * Disallow large snapshots.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
   *
   * Rationale: We don't use snapshots as they lead to poorly-documented, error-prone tests.
   */
  'jest/no-large-snapshots': 'off',

  /**
   * Disallow manually importing from __mocks__.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
   *
   * Rationale: Tests should import from the proper file path, not the __mocks__ folder.
   */
  'jest/no-mocks-import': 'error',

  /**
   * Disallow specific jest. methods.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-jest-methods.md
   *
   * Rationale: There are no methods that we want to disallow.
   */
  'jest/no-restricted-jest-methods': 'off',

  /**
   * Disallow specific matchers & modifiers.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
   *
   * Rationale: We don't use snapshots as they lead to poorly-documented, error-prone tests.
   */
  'jest/no-restricted-matchers': [
    'error',
    {
      toMatchSnapshot: null,
      'not.toMatchSnapshot': null,
      'resolves.toMatchSnapshot': null,
      'resolves.not.toMatchSnapshot': null,
      'rejects.toMatchSnapshot': null,
      'rejects.not.toMatchSnapshot': null,
      toMatchInlineSnapshot: null,
      'not.toMatchInlineSnapshot': null,
      'resolves.toMatchInlineSnapshot': null,
      'resolves.not.toMatchInlineSnapshot': null,
      'rejects.toMatchInlineSnapshot': null,
      'rejects.not.toMatchInlineSnapshot': null,
      toThrowErrorMatchingSnapshot: null,
      'not.toThrowErrorMatchingSnapshot': null,
      'resolves.toThrowErrorMatchingSnapshot': null,
      'resolves.not.toThrowErrorMatchingSnapshot': null,
      'rejects.toThrowErrorMatchingSnapshot': null,
      'rejects.not.toThrowErrorMatchingSnapshot': null,
      toThrowErrorMatchingInlineSnapshot: null,
      'not.toThrowErrorMatchingInlineSnapshot': null,
      'resolves.toThrowErrorMatchingInlineSnapshot': null,
      'resolves.not.toThrowErrorMatchingInlineSnapshot': null,
      'rejects.toThrowErrorMatchingInlineSnapshot': null,
      'rejects.not.toThrowErrorMatchingInlineSnapshot': null,
    },
  ],

  /**
   * Disallow using expect outside of it or test blocks.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
   *
   * Rationale: Eliminates expect calls that won't be executed.
   */
  'jest/no-standalone-expect': 'error',

  /**
   * Require using .only and .skip over f and x.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
   *
   * Rationale: Other rules disallow focused and skipped tests so this is just a backup.
   */
  'jest/no-test-prefixes': 'error',

  /**
   * Disallow explicitly returning from tests.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
   *
   * Rationale: Tests should be void and not return anything.
   */
  'jest/no-test-return-statement': 'error',

  /**
   * Disallow using jest.mock() factories without an explicit type parameter.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-untyped-mock-factory.md
   *
   * Rationale: Unnecessary as types will be inferred.
   */
  'jest/no-untyped-mock-factory': 'off',

  /**
   * Suggest using toBeCalledWith() or toHaveBeenCalledWith().
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
   *
   * Rationale: Gives a stronger assertion than toBeCalled because it also checks arguments. Use
   *            expect.anything(), expect.any(Date), etc where the exact parameter is unknown.
   */
  'jest/prefer-called-with': 'error',

  /**
   * Suggest using the built-in comparison matchers.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
   *
   * Rationale: Built-in matchers improve readability and give better error messages.
   */
  'jest/prefer-comparison-matcher': 'error',

  /**
   * Prefer using .each rather than manual loops.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md
   *
   * Rationale: Jest's built-in loop functionality is more explicit and gives better output.
   */
  'jest/prefer-each': 'error',

  /**
   * Suggest using the built-in equality matchers.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
   *
   * Rationale: Built-in matchers improve readability and give better error messages.
   */
  'jest/prefer-equality-matcher': 'error',

  /**
   * Suggest using expect.assertions() OR expect.hasAssertions().
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
   *
   * Rationale: Adding expect.assertions or expect.hasAssertions to every test is time-consuming and
   *            adds little value.
   */
  'jest/prefer-expect-assertions': 'off',

  /**
   * Prefer await expect(...).resolves over expect(await ...) syntax.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
   *
   * Rationale: Encourages better test consistency and outputs more useful errors.
   */
  'jest/prefer-expect-resolves': 'error',

  /**
   * Prefer having hooks in a consistent order.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
   *
   * Rationale: We've disabled hooks completely.
   */
  'jest/prefer-hooks-in-order': 'off',

  /**
   * Suggest having hooks before any test cases.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
   *
   * Rationale: We've disabled hooks completely.
   */
  'jest/prefer-hooks-on-top': 'off',

  /**
   * Enforce lowercase test names.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
   *
   * Rationale: Lowercase test descriptions are more readable but this should be treated as a
   *            convention rather than a rule as there are legitimate situations to break it.
   */
  'jest/prefer-lowercase-title': 'off',

  /**
   * Prefer mock resolved/rejected shorthands for promises.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
   *
   * Rationale: Jest provides methods for mocking promises so you don't have to do it manually.
   */
  'jest/prefer-mock-promise-shorthand': 'error',

  /**
   * Prefer including a hint with external snapshots.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
   *
   * Rationale: Providing a snapshot hint makes it easier for reviewers to verify snapshots.
   */
  'jest/prefer-snapshot-hint': 'error',

  /**
   * Suggest using jest.spyOn().
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
   *
   * Rationale: Spies allow testing of function behaviour without the need to manually restore the
   *            original implementation.
   */
  'jest/prefer-spy-on': 'error',

  /**
   * Suggest using toStrictEqual().
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
   *
   * Rationale: Stricter testing of objects results in more robust tests.
   */
  'jest/prefer-strict-equal': 'error',

  /**
   * Suggest using toBe() for primitive literals.
   *
   * Recommended: Yes for stylistic reasons
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
   *
   * Rationale: For primitive literals, toBe and its variants are more readable than toEqual or
   *            toStrictEqual.
   */
  'jest/prefer-to-be': 'error',

  /**
   * Suggest using toContain().
   *
   * Recommended: Yes for stylistic reasons
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
   *
   * Rationale: Built-in matchers improve readability and give better error messages.
   */
  'jest/prefer-to-contain': 'error',

  /**
   * Suggest using toHaveLength().
   *
   * Recommended: Yes for stylistic reasons
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
   *
   * Rationale: Built-in matchers improve readability and give better error messages.
   */
  'jest/prefer-to-have-length': 'error',

  /**
   * Suggest using test.todo.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
   *
   * Rationale: This will cause unimplemented test cases to be highlighted in the test output.
   */
  'jest/prefer-todo': 'error',

  /**
   * Require setup and teardown code to be within a hook.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
   *
   * Rationale: We've disabled hook usage so this isn't needed.
   */
  'jest/require-hook': 'off',

  /**
   * Require a message for toThrow().
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
   *
   * Rationale: Ensures that the correct error has been thrown.
   */
  'jest/require-to-throw-message': 'error',

  /**
   * Require test cases and hooks to be inside a describe block.
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
   *
   * Rationale: When tests and hooks are outside a describe block, it isn't obvious what they refer
   *            to. This rule also enforces a single top-level describe summarising all tests in the
   *            file. If multiple describes are needed, they should be in separate test files.
   */
  'jest/require-top-level-describe': ['error', { maxNumberOfTopLevelDescribes: 1 }],

  /**
   * Enforce valid describe() callback.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
   *
   * Rationale: Passing an incorrect callback to describe can lead to unexpected test errors.
   */
  'jest/valid-describe-callback': 'error',

  /**
   * Enforce valid expect() usage.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
   *
   * Rationale: Invalid expects can lead to tests passing erroneously.
   */
  'jest/valid-expect': 'error',

  /**
   * Require promises that have expectations in their chain to be valid.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
   *
   * Rationale: Invalid promise expects may not be correctly executed.
   */
  'jest/valid-expect-in-promise': 'error',

  /**
   * Enforce valid titles.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
   *
   * Rationale: Disabled as it doesn't allow variables to be used.
   */
  'jest/valid-title': 'off',

  /**
   * Enforce unbound methods are called with their expected scope..
   *
   * Recommended: No
   *
   * See: https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
   *
   * This rule requires type information from `@typescript-eslint/parser` with the `project` option.
   *
   * Rationale: Passing class methods around as values can remove type safety by failing to capture
   *            this.
   */
  'jest/unbound-method': 'error',
};
