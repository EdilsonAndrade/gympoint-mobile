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
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "no-param-reassign": "off",
  },
};
