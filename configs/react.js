module.exports = {
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
  ],

  extends: [
    // Do not extend the `airbnb` config here directly, as it will re-extend `airbnb-base` which we already extend in our `base`. That leads to duplicate rules that need to be overridden more than once.
    // Instead, extend the individual `airbnb/rules/*` rulesets.
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
    'airbnb/rules/react-hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['link', 'to'],
      },
    ],
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': [
      'warn',
      {
        checkContextTypes: true,
        checkChildContextTypes: true,
        forbid: ['any', 'array', 'object'],
      },
    ],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-bind': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'off',
    'react/no-unsafe': [
      'error',
      {
        'checkAliases': true,
      }
    ],
    'react/prop-types': 'warn',
    'react/sort-comp': [
      'error',
      {
        order: [
          'propTypes',
          'props',
          'state',
          'defaultProps',
          'contextTypes',
          'childContextTypes',
          'getChildContext',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: true,
        sortShapeProp: true,
      },
    ],
  },
}
