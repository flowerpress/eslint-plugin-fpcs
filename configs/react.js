module.exports = {
  plugins: [
    'react',
    'react-hooks',
  ],

  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      generators: true,
      jsx: true,
    },
    sourceType: 'module',
  },

  extends: [
    'plugin:react/recommended'
  ],

  rules: {
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
        callbacksLast: true,
        ignoreCase: true,
        sortShapeProp: true,
      },
    ],
  },
}
