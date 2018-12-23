"use strict";

module.exports = {
  env: {
    commonjs: true,
    es6: true,
  },
  extends: [
    "eslint:all",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  globals: {
    document: true,
    window: true,
    Intl: true,
    fetch: true,
    alert: true,
    process: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  plugins: ["import", "react"],
  root: true,
  rules: {
    "id-length": ["error", { exceptions: ["_", "i"] }],
    "max-lines": ["error", { skipComments: true, skipBlankLines: true }],
    "sort-imports": "off",
  },
  settings: {
    react: {
      version: "16.0",
    },
  },
};
