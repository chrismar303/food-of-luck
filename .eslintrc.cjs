/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    '@vue/script-setup-uses-vars'
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never']
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
