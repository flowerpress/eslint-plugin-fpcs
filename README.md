# eslint-plugin-fpcs

![npm version](https://img.shields.io/npm/v/eslint-plugin-fpcs) ![npm (prod) eslint dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-fpcs/eslint) ![npm (prod) mocha dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-fpcs/mocha) ![npm bundle size](https://img.shields.io/bundlephobia/min/eslint-plugin-fpcs) ![npm downloads](https://img.shields.io/npm/dt/eslint-plugin-fpcs) ![NPM License](https://img.shields.io/npm/l/eslint-plugin-fpcs)

FPCS eslint style rules.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-fpcs`:

```
$ npm install eslint-plugin-fpcs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-fpcs` globally.

## Usage

Add `fpcs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fpcs"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "fpcs/rule-name": 2
    }
}
```

## Supported Rules

* no-gremlin-chars





