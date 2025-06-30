import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// Specify files to ignore
eslintConfig.push({
  ignores: [
    "node_modules",  // Ignore the node_modules directory
    "**/*.json",     // Ignore JSON files
    "**/*.md",       // Ignore markdown files
    "**/dist",       // Ignore the dist folder
    "**/build",      // Ignore build directories
  ],
});

export default eslintConfig;
