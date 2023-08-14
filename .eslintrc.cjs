module.exports = {
  // ...
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    // ...
    "prettier",
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["jsx-a11y"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "tailwindcss/no-custom-classname": "off",
  },
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      env: {
        // Enables global variables available in Astro components.
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"

        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        "prettier/prettier": "off",
      },
    },
  ],
}
