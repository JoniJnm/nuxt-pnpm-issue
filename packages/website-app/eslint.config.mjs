// ESLint flat config for Nuxt 3 + TypeScript + Vue
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
// Note: eslint-plugin-nuxt v4 doesn't provide flat configs; omit for now
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['node_modules/**', '.nuxt/**', 'dist/**', '.output/**']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],
  // Ensure Vue SFCs use vue-eslint-parser with TypeScript inside <script lang="ts">
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      }
    },
    rules: {
      // Nuxt allows single-word names for route components like pages/index.vue
      'vue/multi-word-component-names': 'off'
    }
  }
]
