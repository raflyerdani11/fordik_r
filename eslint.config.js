// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginCypress from 'eslint-plugin-cypress';
import { defineConfig } from 'eslint/config';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([// =====================
// Global JS & React
// =====================
{
  files: ['**/*.{js,mjs,cjs,jsx}'],
  plugins: {
    js,
    react: pluginReact,
  },
  extends: ['js/recommended'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}, // =====================
// Cypress (E2E)
// =====================
{
  files: ['cypress/**/*.cy.{js,jsx}'],
  plugins: {
    cypress: pluginCypress,
  },
  languageOptions: {
    globals: {
      ...globals.browser,
      ...pluginCypress.environments.globals.globals,
    },
  },
}, pluginReact.configs.flat.recommended, daStyle, ...storybook.configs["flat/recommended"]]);
