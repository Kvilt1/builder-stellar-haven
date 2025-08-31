/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: false,
  },
  plugins: ["@typescript-eslint", "import", "boundaries"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project: __dirname,
      },
      node: true,
    },
    boundaries: [
      {
        type: "app",
        pattern: "client/**",
      },
      {
        type: "module",
        pattern: "client/modules/*/**",
      },
      {
        type: "shared",
        pattern: "shared/**",
      },
    ],
  },
  rules: {
    // Enforce import order
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
        pathGroups: [
          { pattern: "@shared/**", group: "internal", position: "before" },
          { pattern: "@modules/**", group: "internal", position: "before" },
          { pattern: "@ds/**", group: "internal", position: "before" },
          { pattern: "@/**", group: "internal", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],

    // Restrict deep imports between modules
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          // From anywhere, force using module barrels only
          { target: "client/modules", from: "client", message: "Import modules via @modules/<name> barrel only." },
        ],
      },
    ],

    // Optional: boundaries plugin (soft guidance)
    "boundaries/element-types": [
      "warn",
      {
        default: "disallow",
        rules: [
          { from: ["app"], allow: ["module", "shared"] },
          { from: ["module"], allow: ["module", "shared"] },
          { from: ["shared"], allow: ["shared"] },
        ],
      },
    ],

    // TS rule tuning
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
  ],
};

