import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";



export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    rules: {
      'no-restricted-imports': [
           'error',
           {
             paths: [
               {
                 name: 'moment',
                 message: 'Moment is not allowed',
               },
             ],
           },
         ],

    },
  },
]);
