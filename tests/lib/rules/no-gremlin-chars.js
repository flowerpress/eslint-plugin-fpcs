/**
 * @fileoverview Disallow invisible and zero-width unicode characters - aka &#34;gremlins&#34;
 * @author Matt Rabe
 */
"use strict";

const rule = require("../../../lib/rules/no-gremlin-chars");
const RuleTester = require("../../../lib/testers/rule-tester");

const ruleTester = new RuleTester();
ruleTester.run("no-gremlin-chars", rule, {
    valid: [
        {
            code: "Any content that does not contain a gremlin character.",
        }
    ],

    invalid: [
        {
            code: "Any content that contains a gremlin character.A sentence with a gremlin character.",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
