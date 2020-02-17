/**
 * @fileoverview Disallow invisible and zero-width unicode characters - aka "gremlins"
 * @author Matt Rabe
 */
"use strict";

const gremlinsRegExp = new RegExp('[\u0003\u00a0\u200b\u200c\u200e\u201c\u201d\u202c\u202d\u202e\ufffc]', 'g');

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Disallow invisible and zero-width unicode characters - aka \"gremlins\"",
            category: "Possible Errors",
            recommended: true
        },
        fixable: "code",
        schema: []
    },

    create: function(context) {
        return {
            Literal: (node) => {
                if (typeof(node.raw) === 'string' && node.raw.match(gremlinsRegExp)) {
                    context.report({
                        node: node,
                        message: 'Gremlin characters are disallowed',
                        fix: function(fixer) {
                            if (typeof(node.raw) === 'string') {
                                return fixer.replaceText(node, node.raw.replace(gremlinsRegExp, ''));
                            }

                            return fixer;
                        }
                    });
                }
            }
        };
    }
};
