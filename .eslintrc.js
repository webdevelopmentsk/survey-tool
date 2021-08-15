module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 120, 'ignoreStrings': true }],
    'vue/max-attributes-per-line': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/v-slot-style': ['error', {
      'atComponent': 'shorthand',
      'default': 'shorthand',
      'named': 'shorthand'
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/attribute-hyphenation': 'off',
    'vue/custom-event-name-casing': 'off',
  }
}
