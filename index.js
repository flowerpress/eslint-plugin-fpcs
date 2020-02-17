/**
 * @fileoverview FPCS eslint libary of configs and rules.
 * @author Matt Rabe
 */
"use strict";

var requireIndex = require("requireindex");

// import all rules and configs
module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: requireIndex(__dirname + "/configs"),
};
