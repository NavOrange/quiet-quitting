module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'no-console': (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? 'warn' : 'off',
    'no-debugger': (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.{spec,test}.{j,t}s?(x)',
        '**/*.{spec,test}.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    },
    {
      files: [
        'src/**/*.{j,t}s?(x)'
      ],
      rules: {
        'prefer-const': 'warn'
      }
    }
  ]
};