import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    files: ["src/scripts/*.js"],
    ignores: ["*.config.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
    },
  },
  pluginJs.configs.recommended,
];
