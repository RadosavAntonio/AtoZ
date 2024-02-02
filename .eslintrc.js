module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['package.json'],
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
  },
}
