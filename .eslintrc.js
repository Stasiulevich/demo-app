module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: '.',
    project: ['./tsconfig.json'],
  },
  settings: {
    jsx: true,
  },
  extends: ['@react-native-community', 'plugin:react/jsx-runtime', 'airbnb-base', 'airbnb-typescript', 'prettier'],
  rules: {
    'no-use-before-define': ['warn'],
    'no-unused-vars': 'warn',
    'global-require': 'off',
    'no-else-return': 'off',
    'import/prefer-default-export': 'off',
    eqeqeq: 'off',
    'max-len': ['error', { code: 120 }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
  },
};
