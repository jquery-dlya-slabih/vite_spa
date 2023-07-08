module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.tsx', '.ts']
      },
      typescript: {}
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:sonarjs/recommended',
    'plugin:optimize-regex/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react-refresh/only-export-components': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off'
  },
  overrides: [
    {
      files: '*.test.ts?(x)',
      extends: ['plugin:vitest/recommended', 'plugin:testing-library/react']
    }
  ]
};
