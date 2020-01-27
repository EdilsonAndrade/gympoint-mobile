module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export":"off",
    "no-unused-vars":["error", {argsIgonePattern: "^_"}],
    "react/jsx-one-expression-per-line":"off",
    "global-require":"off",
    "no-param-reassign":"off",
    "no-param-reassign": "off",
    "react/state-in-constructor":"off",
    "react/jsx-curly-newline": "off",
    "react/static-property-placement":"off",
    "react/jsx-props-no-spreading": "off",
  },
  settings:{
    "import/resolver":{
      "babel-plugin-root-import":{
          rootPathSuffix: "src"
        }
      }
  },
};
