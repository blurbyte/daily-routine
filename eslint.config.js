import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist', 'coverage', 'test-results', 'playwright-report']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended],
    plugins: { 'simple-import-sort': simpleImportSort },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^_$', argsIgnorePattern: '^_', ignoreRestSiblings: true }],
      'no-console': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // Off: React Compiler diagnostics, not using the compiler
      'react-hooks/immutability': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off'
    }
  },
  {
    files: ['*.config.js'],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ['server.js'],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['**/__tests__/**', 'src/setupTests.js'],
    languageOptions: {
      globals: { ...globals.vitest, ...globals.node }
    }
  }
]);
