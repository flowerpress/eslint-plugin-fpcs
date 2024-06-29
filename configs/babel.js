module.exports = {
  plugins: [
    'babel',
  ],

  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      generators: true,
      jsx: true,
    },
    sourceType: 'module',
  },

  rules: {
    'babel/semi': ['error', 'never'],
  },
}
