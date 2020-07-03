# eslint-plugin-fpcs

![npm version](https://img.shields.io/npm/v/eslint-plugin-fpcs) ![npm (prod) eslint dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-fpcs/eslint) ![npm (prod) mocha dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-fpcs/mocha) ![npm bundle size](https://img.shields.io/bundlephobia/min/eslint-plugin-fpcs) ![npm downloads](https://img.shields.io/npm/dt/eslint-plugin-fpcs) ![NPM License](https://img.shields.io/npm/l/eslint-plugin-fpcs)

FPCS eslint style rules.

## Installation

```
$ npm install eslint-plugin-fpcs
```

## Usage examples

Add the desired configs to the `extends` section of your `.eslintrc` configuration file.

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

### React TypeScript

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

## Available configs:

* `plugin:fpcs/base`
* `plugin:fpcs/react`
* `plugin:fpcs/react-typescript`
* `plugin:fpcs/typescript`
* `plugin:fpcs/vue`

## Available Custom Rules

* `fpcs/no-gremlin-chars` (automatically set to 'error' when using base config)
