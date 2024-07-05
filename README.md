# eslint-plugin-fpcs

![npm version](https://img.shields.io/npm/v/eslint-plugin-fpcs) ![npm (prod) eslint dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-fpcs/eslint) ![npm (prod) mocha dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-fpcs/mocha) ![npm bundle size](https://img.shields.io/bundlephobia/min/eslint-plugin-fpcs) ![npm downloads](https://img.shields.io/npm/dt/eslint-plugin-fpcs) ![NPM License](https://img.shields.io/npm/l/eslint-plugin-fpcs)

FPCS eslint style rules.

## Installation

1. `yarn add --dev eslint-plugin-fpcs`
1. Install peer dependencies. Most of the peer dependencies on this package are optional, only required for certain platforms.
    - Install required peer deps for base config: `npx check-peer-dependencies --yarn --install`
    - If you are using Babel, install Babel peer deps: `yarn add --dev @babel/eslint-parser@^7.22.15 eslint-plugin-babel@5.3.1`
    - If you are using Typescript, install Typescript peer deps: `yarn add --dev @typescript-eslint/eslint-plugin@7.14.1 @typescript-eslint/parser@7.14.1 eslint-import-resolver-typescript@3.6.1`
    - If you are using React, install React peer deps: `yarn add --dev eslint-config-airbnb@19.0.4 eslint-plugin-jsx-a11y@6.9.0 eslint-plugin-react@7.34.3 eslint-plugin-react-hooks@4.6.2`
    - If you are using Vue, install Vue peer deps: `yarn add --dev eslint-plugin-vue@9.26.0`
    - Confirm peer deps for peace of mind: `npx check-peer-dependencies --yarn`

## Migrating from v1.x to v2.x

1. Update your project's package.json devDependencies to use `"eslint-plugin-fpcs": "^2.0.0"`
1. Run `yarn`
1. Follow "Install peer dependencies" instruction from "Installation" section above.

### 💔 Breaking changes from v1.x

#### Babel has been split off into a separate config

If you use babel, you will need to add `"plugin:fpcs/babel"` to the `extends` section of your .eslintrc file. Make sure to place it directly after `base`, before any other configs like typescript or react.

#### `prefer-default-export` removed in favor of opposite `no-default-export`

FPCS has decided to move to always using named exports. [See discussion in style guide](https://docs.google.com/document/d/1ExydygJUmlO_ZlwRDK3e-ntaxaRRMWg-luKwzrnzumU/edit#heading=h.m2qfah1dyz6l).

To use v2 you will need to do one of the following:

* Change all default exports to named exports in your codebase.
* Add `eslint-disable import/no-default-export` for every default export in your codebase.
* Add the following to your codebase's .eslintrc file:

```
rules: {
  'import/no-default-export': 'off',
  'import/prefer-default-export': 'warn',
  'no-restricted-exports': 'off',
}
```

Alternatively, you may stay on v1.x, but future updates may not be applied to the v1.x tree.

## Usage

Add desired config sets to the `extends` section of your `.eslintrc` or `.eslintrc.js` configuration file.

#### Available configs:

* `plugin:fpcs/base`
* `plugin:fpcs/babel`
* `plugin:fpcs/react`
* `plugin:fpcs/react-typescript`
* `plugin:fpcs/typescript`
* `plugin:fpcs/vue`

### JavaScript / ECMAScript

```json
{
    "extends": [ "plugin:fpcs/base" ],
}
```

### TypeScript

```json
{
    "extends": [
        "plugin:fpcs/base",
        "plugin:fpcs/typescript",
    ],
}
```

### React

```json
{
    "extends": [
        "plugin:fpcs/base",
        "plugin:fpcs/react",
    ],
}
```

### React TypeScript (automatically adds fpcs/react and fpcs/typescript)

```json
{
    "extends": [
        "plugin:fpcs/base",
        "plugin:fpcs/react-typescript",
    ],
}
```

### Vue

```json
{
    "extends": [
        "plugin:fpcs/base",
        "plugin:fpcs/vue",
    ],
}
```

### Babel

Typically used on a React app that gets transpiled by babel.

```json
{
    "extends": [
        "plugin:fpcs/base",
        "plugin:fpcs/babel",
        ...if you extend other configs place them here, AFTER babel...
    ],
}
```

## Add or modify individual rules:

Add desired config sets to the `rules` section of your `.eslintrc` or `.eslintrc.js` configuration file.

```json
  "rules": {
    "@typescript-eslint/consistent-type-assertions": "off",
  },
```

## Available Custom Rules

* `fpcs/no-gremlin-chars` (automatically set to 'error' when using base config)
* `fpcs/prefer-early-return` (automatically set to 'error' when using base config)

## Development

To develop on this package, I strongly recommended that you use [yalc](https://www.npmjs.com/package/yalc). Yalc solves issues related to peer dependencies not symlinking correctly when using `yarn link` on local. Just run `yalc publish` in this repo and then `yalc add eslint-plugin-fpcs && yarn` in the user repo after every change.
