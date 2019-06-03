# Disallow invisible and zero-width unicode characters - aka &#34;gremlins&#34; (no-gremlin-chars)

Inspired by the "Gremlins tracker for Visual Studio Code" plugin.

**Will be obsolete if [this ticket](https://github.com/eslint/eslint/issues/11800) is resolved on ESLint no-irregular-whitespace core rule.**

## Rule Details

This rule aims to prevent hard-to-spot "invisible" characters from entering your codebase.

Examples of **incorrect** code for this rule:

```js

Any content that contains a gremlin character.

```

Examples of **correct** code for this rule:

```js

Any content that does not contain a gremlin character.

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

If you intentionally want to include a gremlin character.
