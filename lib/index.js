/**
 * @fileoverview FPCS style rules
 * @author Matt Rabe
 */
"use strict";

var requireIndex = require("requireindex");

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      rules: {
        'fpcs/no-gremlin-chars': 'error',
      },
    },
  },
};
