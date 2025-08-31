import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import boundaries from "eslint-plugin-boundaries";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    files: ["**/*.{ts,tsx,js,cjs}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: false,
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
      boundaries,
    },
    settings: {
      "import/resolver": {
        typescript: { project: ["./tsconfig.json"] },
        node: { extensions: [".js", ".ts", ".tsx"] },
      },
    },
    rules: {
      // Import ordering
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

      // Prevent deep imports across module boundaries; only use barrels
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            { group: ["@modules/*/*", "@modules/*/**"], message: "Import modules via @modules/<name> barrel only." },
            { group: ["@ds/*/*", "@ds/*/**"], message: "Import design-system via @ds/* barrel only." },
          ],
        },
      ],

      // Optional boundaries guidance (soft constraints)
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
  },
];

