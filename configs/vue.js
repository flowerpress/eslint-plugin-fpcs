const indentRule = () => {
  const { rules: { indent: baseIndent } } = require('./base.js')

  myIndent = [ ...baseIndent ]

  myIndent[1] = 4

  return [ ...myIndent ]
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
    'vue/html-indent': ['error', 4],
    'vue/script-indent': ['error', 4, { switchCase: 1 }],
  },
}
