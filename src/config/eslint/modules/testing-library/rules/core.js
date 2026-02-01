export default {
  /**
   * Enforce promises from async queries to be handled.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-query.md
   *
   * Rationale: Prevents promises being treated as synchronous code, which can lead to errors and
   *            intermittent test failures.
   */
  'testing-library/await-async-query': 'error',

  /**
   * Enforce promises from async utils to be awaited properly.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
   *
   * Rationale: Prevents promises being treated as synchronous code, which can lead to errors and
   *            intermittent test failures.
   */
  'testing-library/await-async-utils': 'error',

  /**
   * Enforce promises from fireEvent methods to be handled.
   *
   * Suggested for: Yes for Marko / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-fire-event.md
   *
   * Rationale: Not available for React. We already use userEvent instead.
   */
  'testing-library/await-fire-event': 'off',

  /**
   * Ensures consistent usage of data-testid.
   *
   * Suggested for: No
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
   *
   * Rationale: Enforcing kebab case ensures a consistent naming convention.
   */
  'testing-library/consistent-data-testid': ['error', { testIdPattern: '^[a-z0-9-]+$' }],

  /**
   * Disallow unnecessary await for sync events.
   *
   * Suggested for: No
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md
   *
   * Rationale: We use user-event V14+ where all events are asyncronous and should be awaited.
   */
  'testing-library/no-await-sync-events': 'off',

  /**
   * Disallow unnecessary await for sync queries.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-query.md
   *
   * Rationale: There's no need to await synchronous code.
   */
  'testing-library/no-await-sync-query': 'error',

  /**
   * Disallow the use of container methods.
   *
   * Suggested for: Yes for Angular / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
   *
   * Rationale: Accessing nodes via container queries is bad practice, use Testing Library queries
   *            instead.
   */
  'testing-library/no-container': 'error',

  /**
   * Disallow the use of debugging utilities like debug.
   *
   * Suggested for: Yes for Angular / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
   *
   * Rationale: Debug utils are useful for development but shouldn't be committed.
   */
  'testing-library/no-debugging-utils': [
    'error',
    {
      utilsToCheckFor: {
        debug: true,
        logDOM: true,
        logRoles: true,
        logTestingPlaygroundURL: true,
        prettyDOM: true,
        prettyFormat: true,
      },
    },
  ],

  /**
   * Disallow importing from DOM Testing Library.
   *
   * Suggested for: Yes for Angular / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
   *
   * Rationale: React Testing Library re-exports and sometimes extends core DOM utilities, so we
   *            should always use these instead.
   */
  'testing-library/no-dom-import': ['error', 'react'],

  /**
   * Disallow the use of the global RegExp flag (/g) in queries.
   *
   * Suggested for: No
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-global-regexp-flag-in-query.md
   *
   * Rationale: Global regexes hold state and can cause tests to interfere with one another.
   */
  'testing-library/no-global-regexp-flag-in-query': 'error',

  /**
   * Disallow the use of cleanup.
   *
   * Suggested for: No
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
   *
   * Rationale: Cleanup is performed automatically and there's no need to call it manually.
   */
  'testing-library/no-manual-cleanup': 'error',

  /**
   * Disallow direct Node access.
   *
   * Suggested for: Yes for Angular / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
   *
   * Rationale: We should use Testing Library queries to access DOM nodes wherever possible.
   */
  'testing-library/no-node-access': 'error',

  /**
   * Disallow the use of promises passed to a fireEvent method.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
   *
   * Rationale: fireEvent expects a concrete HTML element, not a promise.
   */
  'testing-library/no-promise-in-fire-event': 'error',

  /**
   * Disallow the use of render in testing frameworks setup functions.
   *
   * Suggested for: Yes for Angular / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md
   *
   * Rationale: Explicitly rendering components within individual tests makes them easier to read.
   */
  'testing-library/no-render-in-setup': 'error',

  /**
   * Disallow wrapping Testing Library utils or empty callbacks in act.
   *
   * Suggested for: Yes for Marko / React
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
   *
   * Rationale: Wrapping erroneous code in act simply silences errors. Instead we should find the
   *            actual issue and fix it.
   */
  'testing-library/no-unnecessary-act': 'error',

  /**
   * Disallow empty callbacks for waitFor and waitForElementToBeRemoved.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-empty-callback.md
   *
   * Rationale: Passing an empty callback is incorrect usage and a hack to force the library to wait
   *            until the next tick.
   */
  'testing-library/no-wait-for-empty-callback': 'error',

  /**
   * Disallow the use of multiple expect calls inside waitFor.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
   *
   * Rationale: Multiple assertions inside a waitFor can make tests take longer to run and fail.
   */
  'testing-library/no-wait-for-multiple-assertions': 'error',

  /**
   * Disallow the use of side effects in waitFor.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
   *
   * Rationale: When side effects (e.g. userEvent events) are wrapped in waitFor they can be called
   *            multiple times which is undesirable and leads to inconsistent behaviour.
   */
  'testing-library/no-wait-for-side-effects': 'error',

  /**
   * Ensures no snapshot is generated inside of a waitFor call.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
   *
   * Rationale: When snapshots are generated inside waitFor they can be generated multiple times.
   */
  'testing-library/no-wait-for-snapshot': 'error',

  /**
   * Suggest using explicit assertions rather than standalone queries.
   *
   * Suggested for: No
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
   *
   * Rationale: Using explicit assertions makes a test's intentions clearer.
   */
  'testing-library/prefer-explicit-assert': 'error',

  /**
   * Suggest using find(All)By* query instead of waitFor + get(All)By* to wait for elements.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
   *
   * Rationale: We should use the built-in find(All)By* methods rather than manually combining
   *            waitFor and get(All)By*.
   */
  'testing-library/prefer-find-by': 'error',

  /**
   * Ensure appropriate `get*`/`query* queries are used with their respective matchers.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
   *
   * Rationale: get* queries are more robust when checking for element presence as they throw an
   *            error if the element is not found.
   */
  'testing-library/prefer-presence-queries': 'error',

  /**
   * Suggest using queryBy* queries when waiting for disappearance.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
   *
   * Rationale: When dealing with element disappearance, queryBy* gives more useful error messages
   *            than getBy*.
   */
  'testing-library/prefer-query-by-disappearance': 'error',

  /**
   * Suggest using screen while querying.
   *
   * Suggested for: Yes for Angular / DOM / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
   *
   * Rationale: screen is officially preferred and recommended over destructuring from render.
   */
  'testing-library/prefer-screen-queries': 'error',

  /**
   * Suggest using userEvent over fireEvent for simulating user interactions.
   *
   * Suggested for: No
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
   *
   * Rationale: userEvent simulates browser events more realistically than fireEvent.
   */
  'testing-library/prefer-user-event': 'error',

  /**
   * Use waitFor instead of deprecated wait method.
   *
   * Suggested for: No
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-wait-for.md
   *
   * Rationale: We shouldn't be using deprecated methods.
   */
  'testing-library/prefer-wait-for': 'error',

  /**
   * Enforce a valid naming for return value from render.
   *
   * Suggested for: Yes for Angular / Marko / React / Vue
   *
   * See: https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
   *
   * Rationale: Promotes consistency and better naming conventions.
   */
  'testing-library/render-result-naming-convention': 'error',
};
