import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";


export default [
  js.config.recommended,
  
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];