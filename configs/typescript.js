const base = require('./base')

module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint',
    'no-null',
  ],

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'comma',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'comma',
          'requireLast': false,
        },
      },
    ],
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [ 'error' ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'import/extensions': [
        'error',
        'ignorePackages',
        {
          ...base.rules['import/extensions'][2],
          ts: 'never',
          tsx: 'never',
        }
    ],
    'no-null/no-null': 'warn',
  }
}
