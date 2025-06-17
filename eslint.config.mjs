// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/block-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "never",
        math: "never",
      },
    ],
  },
});
