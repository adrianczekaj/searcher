module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'object-curly-newline': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: 'id',
      },
    ],
  },
};
