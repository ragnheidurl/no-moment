
import { defineConfig } from "eslint/config";



export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", 
        sourceType: "module", 
      },
    },
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
}]
);
