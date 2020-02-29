const indentRule = () => {
  const { rules: { indent: baseIndent } } = require('./base.js')

  baseIndent[1] = 4

  return [ ...baseIndent ]
}

module.exports = {
  plugins: [
    'vue',
  ],

  extends: [
    'plugin:vue/recommended',
  ],

  rules: {
    indent: indentRule(),
  },
}
