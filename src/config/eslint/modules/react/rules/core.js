export default {
  /**
   * Enforces consistent naming for boolean props.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
   *
   * Rationale: Nice in theory but too restrictive in practice.
   */
  'react/boolean-prop-naming': 'off',

  /**
   * Disallow usage of button elements without an explicit type attribute.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
   *
   * Rationale: Specifying a button type makes its intention more explicit and helps avoid
   *            unintentional page reloads.
   */
  'react/button-has-type': 'error',

  /**
   * Enforce all defaultProps have a corresponding non-required PropType.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
   *
   * Rationale: We don't use defaultProps.
   */
  'react/default-props-match-prop-types': 'off',

  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
   *
   * Rationale: This is overly restrictive as both approaches have their use cases.
   */
  'react/destructuring-assignment': 'off',

  /**
   * Disallow missing displayName in a React component definition.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
   *
   * Rationale: We don't use class components.
   */
  'react/display-name': 'off',

  /**
   * Disallow certain props on components.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
   *
   * Rationale: There are times when passing classnames to a component is useful. e.g. when
   *            importing an SVG as a component.
   */
  'react/forbid-component-props': 'off',

  /**
   * Disallow certain props on DOM Nodes.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
   *
   * Rationale: This is overly restrictive, although we should avoid inline styles where possible.
   */
  'react/forbid-dom-props': 'off',

  /**
   * Disallow certain elements.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
   *
   * Rationale: There are no elements or components we want to forbid.
   */
  'react/forbid-elements': 'off',

  /**
   * Disallow using another component's propTypes.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
   *
   * Rationale: We don't use propTypes.
   */
  'react/forbid-foreign-prop-types': 'off',

  /**
   * Disallow certain propTypes.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
   *
   * Rationale: We don't use propTypes.
   */
  'react/forbid-prop-types': 'off',

  /**
   * Enforce a specific function type for function components.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
   *
   * Rationale: Prefer arrow functions for all components.
   */
  'react/function-component-definition': [
    'error',
    { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
  ],

  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
   *
   * Rationale: We should follow the pattern `const [foo, setFoo] = useState();`.
   */
  'react/hook-use-state': ['error', { allowDestructuredState: true }],

  /**
   * Enforce sandbox attribute on iframe elements.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
   *
   * Rationale: The sandbox attribute enables extra restrictions on iframes and is considered good
   *            security practice.
   */
  'react/iframe-missing-sandbox': 'error',

  /**
   * Enforce boolean attributes notation in JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
   *
   * Rationale: Use `<element attribute />` rather than `<element attribute={true} />`.
   */
  'react/jsx-boolean-value': 'error',

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-child-element-spacing': 'off',

  /**
   * Enforce closing bracket location in JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-closing-bracket-location': 'off',

  /**
   * Enforce closing tag location for multiline JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-closing-tag-location': 'off',

  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
   *
   * Rationale: Literals are more readable than JSX expressions.
   */
  'react/jsx-curly-brace-presence': [
    'error',
    { children: 'never', props: 'never', propElementValues: 'always' },
  ],

  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-curly-newline': 'off',

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-curly-spacing': 'off',

  /**
   * Enforce or disallow spaces around equal signs in JSX attributes.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-equals-spacing': 'off',

  /**
   * Disallow file extensions that may contain JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
   *
   * Rationale: Files containing JSX should use an appropriate file extension. Files without JSX
   *            should use a standard extension.
   */
  'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.jsx', '.tsx'] }],

  /**
   * Enforce proper position of the first property in JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-first-prop-new-line': 'off',

  /**
   * Enforce shorthand or standard form for React fragments.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
   *
   * Rationale: Use shorthand `<>` instead of `<React.Fragment>` where possible.
   */
  'react/jsx-fragments': 'error',

  /**
   * Enforce event handler naming conventions in JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
   *
   * Rationale: Event handler props should begin with 'on'. Event handler functions should begin
   *            with 'handle'.
   */
  'react/jsx-handler-names': 'error',

  /**
   * Enforce JSX indentation.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-indent': 'off',

  /**
   * Enforce props indentation in JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-indent-props': 'off',

  /**
   * Disallow missing key props in iterators/collection literals.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
   *
   * Rationale: Keys should always be used when generating multiple JSX elements.
   */
  'react/jsx-key': [
    'error',
    { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true },
  ],

  /**
   * Enforce JSX maximum depth.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
   *
   * Rationale: This should be left to developer discretion.
   */
  'react/jsx-max-depth': 'off',

  /**
   * Enforce maximum of props on a single line in JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-max-props-per-line': 'off',

  /**
   * Require or prevent a new line after jsx elements and expressions.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-newline': 'off',

  /**
   * Disallow .bind() or arrow functions in JSX props.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
   *
   * Rationale: This is nice in theory but involves jumping through a lot of hoops, such as moving
   *            the function outside the component or memoizing it. Maybe one to consider in future.
   */
  'react/jsx-no-bind': 'off',

  /**
   * Disallow comments from being inserted as text nodes.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
   *
   * Rationale: Prevents comments being accidentally output when rendering a component.
   */
  'react/jsx-no-comment-textnodes': 'error',

  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
   *
   * Rationale: This can be quite a significant performance improvement so let's see if we can make
   *            it work.
   */
  'react/jsx-no-constructed-context-values': 'error',

  /**
   * Disallow duplicate properties in JSX.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
   *
   * Rationale: Props should only be specified once.
   */
  'react/jsx-no-duplicate-props': 'error',

  /**
   * Disallow problematic leaked values from being rendered.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
   *
   * Rationale: Ensures conditionally rendered elements don't accidentally output unexpected values.
   *            e.g. `{items.length && 'There are items!'}` could output '0'.
   */
  'react/jsx-no-leaked-render': 'error',

  /**
   * Disallow usage of string literals in JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
   *
   * Rationale: We have no reason not to use string literals in JSX.
   */
  'react/jsx-no-literals': 'off',

  /**
   * Disallow usage of javascript: URLs.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
   *
   * Rationale: These URLs are dangerous and will throw an error.
   */
  'react/jsx-no-script-url': 'error',

  /**
   * Disallow target="_blank" attribute without rel="noreferrer".
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
   *
   * Rationale: `target="_blank"` should always be accompanied by `rel="noreferrer"` for security.
   */
  'react/jsx-no-target-blank': 'error',

  /**
   * Disallow undeclared variables in JSX.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
   *
   * Rationale: Undeclared variables are unsafe to use.
   */
  'react/jsx-no-undef': 'error',

  /**
   * Disallow unnecessary fragments.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
   *
   * Rationale: Only use fragments where necessary.
   */
  'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

  /**
   * Require one JSX element per line.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-one-expression-per-line': 'off',

  /**
   * Enforce PascalCase for user-defined JSX components.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
   *
   * Rationale: We should use a consistent naming convention that follows React best practices.
   */
  'react/jsx-pascal-case': ['error', { allowNamespace: true }],

  /**
   * Disallow multiple spaces between inline JSX props.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-props-no-multi-spaces': 'off',

  /**
   * Disallow JSX prop spreading.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
   *
   * Rationale: Spreading props bypasses type safety and allows excessive props to be passed to a
   *            component, resulting in unnecessary renders.
   */
  'react/jsx-props-no-spreading': 'error',

  /**
   * Enforce props alphabetical sorting.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
   *
   * Rationale: Props should be sorted logically.
   */
  'react/jsx-sort-props': 'off',

  /**
   * Enforce whitespace in and around the JSX opening and closing brackets.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-tag-spacing': 'off',

  /**
   * Disallow React to be incorrectly marked as unused.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
   *
   * Rationale: No need to import React in v17+.
   */
  'react/jsx-uses-react': 'off',

  /**
   * Disallow variables used in JSX to be incorrectly marked as unused.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
   *
   * Rationale: Ensures variables used in JSX are correctly detected as used.
   */
  'react/jsx-uses-vars': 'error',

  /**
   * Disallow missing parentheses around multiline JSX.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
   *
   * Rationale: Clashes with Prettier.
   */
  'react/jsx-wrap-multilines': 'off',

  /**
   * Disallow when this.state is accessed within setState.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
   *
   * Rationale: If you need to access state in setState, use the callback syntax to ensure you get
   *            the latest state value.
   */
  'react/no-access-state-in-setstate': 'error',

  /**
   * Disallow adjacent inline elements not separated by whitespace.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
   *
   * Rationale: Adjacent inline elements without whitespace between will be rendered touching, which
   *            is usually undesirable.
   */
  'react/no-adjacent-inline-elements': 'error',

  /**
   * Disallow usage of Array index in keys.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
   *
   * Rationale: An item's array index may not stay constant and therefore shouldn't be used as its
   *            key. Use a unique ID instead.
   */
  'react/no-array-index-key': 'error',

  /**
   * Lifecycle methods should be methods on the prototype, not class fields.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-arrow-function-lifecycle': 'off',

  /**
   * Disallow passing of children as props.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
   *
   * Rationale: Children should be passed between opening and closing tags not as a prop.
   */
  'react/no-children-prop': 'error',

  /**
   * Disallow usage of dangerous JSX properties.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
   *
   * Rationale: These properties can lead to security vulnerabilities and should be avoided where
   *            possible.
   */
  'react/no-danger': 'error',

  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
   *
   * Rationale: This causes children to be overwritten and a React error to be thrown.
   */
  'react/no-danger-with-children': 'error',

  /**
   * Disallow usage of deprecated methods.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
   *
   * Rationale: We shouldn't use deprecated methods.
   */
  'react/no-deprecated': 'error',

  /**
   * Disallow usage of setState in componentDidMount.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-did-mount-set-state': 'off',

  /**
   * Disallow usage of setState in componentDidUpdate.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-did-update-set-state': 'off',

  /**
   * Disallow direct mutation of this.state.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-direct-mutation-state': 'off',

  /**
   * Disallow usage of findDOMNode.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
   *
   * Rationale: findDOMNode is deprecated.
   */
  'react/no-find-dom-node': 'error',

  /**
   * Disallow usage of invalid attributes.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
   *
   * Rationale: HTML attributes should only use valid values.
   */
  'react/no-invalid-html-attribute': 'error',

  /**
   * Disallow usage of isMounted.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-is-mounted': 'off',

  /**
   * Disallow multiple component definition per file.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
   *
   * Rationale: One component per file is more maintainable.
   */
  'react/no-multi-comp': 'error',

  /**
   * Enforce that namespaces are not used in React elements.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
   *
   * Rationale: Namespaces are not supported in React elements.
   */
  'react/no-namespace': 'error',

  /**
   * Disallow usage of referential-type variables as default param in functional component.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
   *
   * Rationale: Using inline arrays or objects as default props will cause their reference to change
   *            on every render, causing sub-optimal performance. Instead, declare the default
   *            outside the component definition and pass it in.
   */
  'react/no-object-type-as-default-prop': 'error',

  /**
   * Disallow usage of shouldComponentUpdate when extending React.PureComponent.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-redundant-should-component-update': 'off',

  /**
   * Disallow usage of the return value of ReactDOM.render.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
   *
   * Rationale: Usage of the return value is legacy and likely to be changed or deprecated.
   */
  'react/no-render-return-value': 'error',

  /**
   * Disallow usage of setState.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
   *
   * Rationale: We use state all the time.
   */
  'react/no-set-state': 'error',

  /**
   * Disallow using string references.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
   *
   * Rationale: String refs are legacy.
   */
  'react/no-string-refs': ['off', { noTemplateLiterals: true }],

  /**
   * Disallow this from being used in stateless functional components.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
   *
   * Rationale: `this` doesn't exist in functional components
   */
  'react/no-this-in-sfc': 'error',

  /**
   * Disallow common typos.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
   *
   * Rationale: This will help catch common React typos.
   */
  'react/no-typos': 'error',

  /**
   * Disallow unescaped HTML entities from appearing in markup.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
   *
   * Rationale: Escaping entities is safer and prevents React code being interpreted incorrectly.
   */
  'react/no-unescaped-entities': 'error',

  /**
   * Disallow usage of unknown DOM property.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
   *
   * Rationale: Ensures only valid DOM properties and attributes are used.
   */
  'react/no-unknown-property': 'error',

  /**
   * Disallow usage of unsafe lifecycle methods.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-unsafe': 'off',

  /**
   * Disallow creating unstable components inside components.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
   *
   * Rationale: Components should always be defined in their own scope, not inside other components.
   */
  'react/no-unstable-nested-components': 'error',

  /**
   * Disallow declaring unused methods of component class.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-unused-class-component-methods': 'off',

  /**
   * Disallow definitions of unused propTypes.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
   *
   * Rationale: Props that aren't used can be removed entirely.
   */
  'react/no-unused-prop-types': 'error',

  /**
   * Disallow definitions of unused state.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
   *
   * Rationale: State variables that aren't used can be removed entirely.
   */
  'react/no-unused-state': 'error',

  /**
   * Disallow usage of setState in componentWillUpdate.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
   *
   * Rationale: We don't use class components.
   */
  'react/no-will-update-set-state': 'off',

  /**
   * Enforce ES5 or ES6 class for React Components.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
   *
   * Rationale: We don't use class components.
   */
  'react/prefer-es6-class': 'off',

  /**
   * Prefer exact proptype definitions.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
   *
   * Rationale: TypeScript will handle this for us.
   */
  'react/prefer-exact-props': 'off',

  /**
   * Enforce that props are read-only.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
   *
   * Rationale: Not needed as we aren't using Flow.
   */
  'react/prefer-read-only-props': 'off',

  /**
   * Enforce stateless components to be written as a pure function.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
   *
   * Rationale: Pure function components are simpler and more efficient.
   */
  'react/prefer-stateless-function': 'error',

  /**
   * Disallow missing props validation in a React component definition.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
   *
   * Rationale: We don't use propTypes.
   */
  'react/prop-types': 'off',

  /**
   * Disallow missing React when using JSX.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
   *
   * Rationale:  No need to import React in v17+.
   */
  'react/react-in-jsx-scope': 'off',

  /**
   * Enforce a defaultProps definition for every prop that is not a required prop.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
   *
   * Rationale: We don't use defautProps.
   */
  'react/require-default-props': 'off',

  /**
   * Enforce React components to have a shouldComponentUpdate method.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
   *
   * Rationale: We don't use class components.
   */
  'react/require-optimization': 'off',

  /**
   * Enforce ES5 or ES6 class for returning value in render function.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
   *
   * Rationale: We don't use class components.
   */
  'react/require-render-return': 'off',

  /**
   * Disallow extra closing tags for components without children.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
   *
   * Rationale: Self-closing components look cleaner.
   */
  'react/self-closing-comp': 'error',

  /**
   * Enforce component methods order.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
   *
   * Rationale: We don't use class components.
   */
  'react/sort-comp': 'off',

  /**
   * Enforce defaultProps declarations alphabetical sorting.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
   *
   * Rationale: We don't use defaultProps.
   */
  'react/sort-default-props': 'off',

  /**
   * Enforce propTypes declarations alphabetical sorting.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
   *
   * Rationale: Prop types should be sorted logically.
   */
  'react/sort-prop-types': 'off',

  /**
   * Enforce class component state initialization style.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
   *
   * Rationale: We don't use class components.
   */
  'react/state-in-constructor': 'off',

  /**
   * Enforces where React component static properties should be positioned.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
   *
   * Rationale: We don't use class components.
   */
  'react/static-property-placement': 'off',

  /**
   * Enforce style prop value is an object.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
   *
   * Rationale: The style prop should always be an object.
   */
  'react/style-prop-object': 'error',

  /**
   * Disallow void DOM elements (e.g. <img />, <br />) from receiving children.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
   *
   * Rationale: These elements cannot accept or render children, so they shouldn't be passed.
   */
  'react/void-dom-elements-no-children': 'error',
};
