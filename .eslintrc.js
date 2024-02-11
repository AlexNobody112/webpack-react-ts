module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: [
        '.js', '.jsx', '.tsx',
      ],
    }],
    'no-unused-vars': 'error',
    'no-shadow': 'off',
    'no-underscore-dangle': ['error', {
      allowFunctionParams: true,
      allow: ['__IS_DEV__'],
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import-extension': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-prop-types': ['error', { ignore: ['children'] }],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/src/types/*.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': ['warn', {
          selector: 'variable',
          modifiers: ['global'],
          format: ['camelCase', 'UPPER_CASE'],
          filter: {
            regex: '/__[A-Z_]+_[A-Z_]+__/gm',
            match: true,
          },
        }],
      },
    },
    {
      files: ['**/src/shared/lib/heplers/classNames.ts'],
      rules: {
        'no-unused-vars': 'warn',
      },
    },
  ],
};
