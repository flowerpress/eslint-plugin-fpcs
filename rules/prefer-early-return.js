/**
 * This rule is sourced from @shopify/eslint-plugin (https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/lib/rules/prefer-early-return.js)
 * That packages wants to install react-specific packages (such as eslint-plugin-react) - but we want to use this one non-react apps
 * Hence this rule has been cherry-picked and added here.
 */

const defaultMaximumStatements = 1

module.exports = {
  meta: {
    docs: {
      description:
        'Prefer early returns over full-body conditional wrapping in function declarations.',
      category: 'Best Practices',
      recommended: false,
    },
    schema: [
      {
        type: 'object',
        properties: {
          maximumStatements: {
            type: 'integer',
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const options = context.options[0] || {
      maximumStatements: defaultMaximumStatements,
    }
    const maxStatements = options.maximumStatements

    function isLonelyIfStatement(statement) {
      return statement.type === 'IfStatement' && statement.alternate == null
    }

    function isOffendingConsequent(consequent) {
      return (
        (consequent.type === 'ExpressionStatement' && maxStatements === 0) ||
        (consequent.type === 'BlockStatement' &&
          consequent.body.length > maxStatements)
      )
    }

    function isOffendingIfStatement(statement) {
      return (
        isLonelyIfStatement(statement) &&
        isOffendingConsequent(statement.consequent)
      )
    }

    function hasSimplifiableConditionalBody(functionBody) {
      const body = functionBody.body
      return (
        functionBody.type === 'BlockStatement' &&
        body.length === 1 &&
        isOffendingIfStatement(body[0])
      )
    }

    function checkFunctionBody(functionNode) {
      const body = functionNode.body

      if (hasSimplifiableConditionalBody(body)) {
        context.report(
          body,
          'Prefer an early return to a conditionally-wrapped function body',
        )
      }
    }

    return {
      FunctionDeclaration: checkFunctionBody,
      FunctionExpression: checkFunctionBody,
      ArrowFunctionExpression: checkFunctionBody,
    }
  },
}
