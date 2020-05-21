module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint'
  ],

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn'
  }
}
