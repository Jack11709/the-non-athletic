module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: 'off',
    '@typescript-eslint/quotes': [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    'no-console': [1],
    indent: ['error', 2, { SwitchCase: 1 }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
  root: true,
}
