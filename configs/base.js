module.exports = {
  plugins: [
    'fpcs',
    'import',
  ],

  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/recommended',
  ],

  globals: {
    window: true,
    document: true,
    __dirname: true,
    __DEV__: true,
    CONFIG: true,
    process: true,
    jest: true,
    describe: true,
    test: true,
    it: true,
    expect: true,
    afterEach: true,
    beforeEach: true,
    fetch: true,
    alert: true,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    linkComponents: [
      {
        name: 'Link',
        linkAttribute: 'to',
      },
    ],
  },

  rules: {
    'array-bracket-newline': [
      'error',
      {
        minItems: 2,
        multiline: true,
      },
    ],
    'array-bracket-spacing': ['error', 'always'],
    'array-element-newline': [
      'error',
      {
        minItems: 2,
        multiline: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'brace-style': ['error', 'stroustrup'],
    camelcase: 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'consistent-return': 'warn',
    'dot-notation': 'warn',
    'eol-last': ['error', 'always'],
    'eqeqeq': 'error',
    'fpcs/no-gremlin-chars': 'error',
    'fpcs/prefer-early-return': 'error',
    'global-require': 'warn',
    'import/extensions': [
      'error',
      'always',
      {
        css: 'always',
        js: 'never',
        jsx: 'never',
        styl: 'never',
      },
    ],
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/no-default-export': 'warn',
    'import/no-named-default': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/prefer-default-export': 'off',
    indent: [
      'error',
      2,
      { SwitchCase: 1 }
    ],
    'linebreak-style': 'off',
    'lines-between-class-members': ['error', 'always'],
    'max-len': [
      'warn',
      {
        code: 200,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'no-case-declarations': 'warn',
    'no-confusing-arrow': 'off',
    'no-console': 'error',
    'no-else-return': 'warn',
    'no-multiple-empty-lines': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-exports': [
      'warn',
      { 'restrictedNamedExports': [ 'default' ] },
    ],
    'no-shadow': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [ 'error' ],
    'no-use-before-define': 'off',
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { multiline: true, minProperties: 2 },
        ImportDeclaration: { multiline: true, minProperties: 2 },
        ObjectExpression: { multiline: true, minProperties: 2 },
        ObjectPattern: { multiline: true, minProperties: 2 },
      },
    ],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'export',
        prev: '*',
      },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': 'warn',
    'prefer-template': 'warn',
    quotes: [
      'error',
      'single',
      { 'avoidEscape': true },
    ],
    semi: ['error', 'never'],
    'spaced-comment': ['error', 'always', { markers: ['?'] }],
  },
}
