module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "no-console": "warn",
    "no-debugger": "warn",
    indent: ["warn", 2],
    // need add *.page.vue to ignore
    // but it's does not work with regexp -> off
    "vue/multi-word-component-names": "off",
    "vue/order-in-components": [
      "error",
      {
        order: [
          "directives",
          "components",
          "mixins",
          ["provide", "inject"],
          "props",
          "data",
          "methods",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "ROUTER_GUARDS",
        ],
      },
    ],
    "vue/v-for-delimiter-style": ["error", "of"],
    "vue/next-tick-style": ["error", "promise"],
    "vue/require-prop-types": "error",
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/no-duplicate-attr-inheritance": "error",
    "vue/this-in-template": ["error", "never"],
    "vue/v-on-style": ["error", "shorthand"],
    "vue/no-multi-spaces": "error",
    "vue/padding-line-between-blocks": "error",
    "vue/component-tags-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
    "vue/v-on-event-hyphenation": ["error", "never"],
    "vue/attribute-hyphenation": ["error", "never"],
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: false,
      },
    ],
    "vue/v-bind-style": "error",
    "vue/v-slot-style": ["error", "shorthand"],
    "vue/no-unused-properties": [
      "error",
      {
        groups: ["props", "data", "computed", "methods", "setup"],
        ignorePublicMembers: true,
      },
    ],
  },
};
