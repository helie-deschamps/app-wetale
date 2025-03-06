import prettier from "eslint-config-prettier"
import { includeIgnoreFile } from "@eslint/compat"
import svelte from "eslint-plugin-svelte"
import globals from "globals"
import { fileURLToPath } from "node:url"
import ts from "typescript-eslint"
import svelteConfig from "./svelte.config.js"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url))

export default ts.config(
	includeIgnoreFile(gitignorePath),
	ts.configs.strictTypeChecked,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs["flat/prettier"],
	eslintPluginUnicorn.configs.recommended,
	{
		rules: {
			"unicorn/filename-case": [
				"error",
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
					multipleFileExtensions: false,
				},
			],
			"unicorn/no-null": "off",
			"unicorn/number-literal-case": "off",
			"unicorn/prefer-top-level-await": "off",
		},
	},
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				projectService: true,
				extraFileExtensions: [".svelte"],
				parser: ts.parser,
				svelteConfig,
			},
		},
	},
	{
		files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],

		languageOptions: {
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				projectService: true,
				parser: ts.parser,
			},
		},
	},
	{
		ignores: [
			"vite.config.js",
			"eslint.config.js",
			"svelte.config.js",
			"src-tauri/**/*",
			"tauri-plugin-utils/**/*",
			"!tauri-plugin-utils/src/**/*",
		],
	},
	{
		rules: {
			"prefer-template": "error",
		},
	},
	{
		files: ["src/routes/**/*", "src/params/**/*"],
		rules: {
			"unicorn/filename-case": "off",
		},
	},
)
