import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    files: ["src/scripts/*.js"],
    ignores: ["./webpack.common.js", "./webpack.dev.js", "./webpack.prod.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
    },
  },
];
