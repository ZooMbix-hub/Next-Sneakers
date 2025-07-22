import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'quotes': ['warn', 'single'],
      'prefer-const': 'warn',
      'indent': ['warn', 2],
      'semi': ['warn', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'react/prop-types': 0,
      'no-trailing-spaces': 'error',
      'no-useless-escape': 'warn'
    }
  }
];

export default eslintConfig;
