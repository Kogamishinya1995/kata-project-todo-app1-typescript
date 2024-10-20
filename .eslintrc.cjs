module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@cspell/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react-refresh",
    "react",
    "readable-tailwind",
    "@typescript-eslint",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        trailingComma: "es5",
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "import/no-unresolved": "error",
    "import/no-duplicates": "error",
    "react/prop-types": "off",
    "react/no-this-in-sfc": "error",
    "no-useless-call": "error",
    "no-nested-ternary": "off",
    "no-useless-return": "error",
    "no-console": ["error", { allow: ["log", "warn", "error"] }],
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index", 
          "unknown", 
        ],
        pathGroups: [
          {
            pattern: "react|react-dom|react-router-dom",
            group: "external",
            position: "before",
          },
          {
            pattern: "components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "utils/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "const/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "redux/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "selectors/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "images/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "style/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "external"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
