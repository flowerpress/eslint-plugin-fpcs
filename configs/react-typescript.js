module.exports = {
  parser: '@typescript-eslint/parser',

  plugins: [
    '@typescript-eslint',
    'no-null',
  ],

  extends: [
    'plugin:fpcs/typescript',
    'plugin:fpcs/react',
  ],

  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  }
}
