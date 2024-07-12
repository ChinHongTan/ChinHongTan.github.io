/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier",
        "plugin:prettier/recommended",
    ],
    env: {
        "vue/setup-compiler-macros": true,
    },
    plugins: ["prettier"],
    rules: {
        indent: ["error", 4],
        "prettier/prettier": ["error", { tabWidth: 4, useTabs: false }],
    },
};
