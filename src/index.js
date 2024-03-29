/* eslint-disable @typescript-eslint/naming-convention */

const maxLen = 120;
const maxLines = 1000;

module.exports = {
	extends: [
		"plugin:import/typescript",
	],
	ignorePatterns: [
		"/dist/",
		"/node_modules/",
	],
	overrides: [
		{
			files: [
				"*.ts",
			],
		},
		{
			files: [
				"*.spec.js",
				"*.spec.ts",
				"*.test.ts",
			],
			rules: {
				"@typescript-eslint/no-magic-numbers": "off",
				"no-unused-expressions": "off",
				"padded-blocks": [
					"error",
					{
						classes: "always",
						switches: "never",
					},
				],
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		impliedStrict: true,
		project: "tsconfig.json",
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
		"import",
		"jsdoc",
	],
	reportUnusedDisableDirectives: true,
	root: true,
	rules: {
		"@typescript-eslint/adjacent-overload-signatures": "off",
		"@typescript-eslint/array-type": [
			"error",
			{
				default: "array",
			},
		],
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-ts-comment": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/brace-style": "error",
		"@typescript-eslint/class-literal-property-style": [
			"error",
			"fields",
		],
		"@typescript-eslint/comma-spacing": "error",
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": [
			"error",
			"interface",
		],
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-member-accessibility": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/func-call-spacing": "error",
		"@typescript-eslint/indent": [
			"error",
			"tab",
		],
		"@typescript-eslint/init-declarations": "off",
		"@typescript-eslint/keyword-spacing": "error",
		"@typescript-eslint/lines-between-class-members": "error",
		"@typescript-eslint/member-delimiter-style": "error",
		"@typescript-eslint/member-ordering": [
			"error",
			{
				default: {
					memberTypes: [
						"signature",
						"public-static-field",
						"public-static-get",
						"public-static-set",
						"protected-static-field",
						"protected-static-get",
						"protected-static-set",
						"private-static-field",
						"#private-static-field",
						"private-static-get",
						"#private-static-get",
						"private-static-set",
						"#private-static-set",
						"public-instance-field",
						"protected-instance-field",
						"private-instance-field",
						"#private-instance-field",
						"public-abstract-field",
						"protected-abstract-field",
						"public-field",
						"protected-field",
						"private-field",
						"#private-field",
						"static-field",
						"instance-field",
						"abstract-field",
						"field",
						"public-instance-get",
						"protected-instance-get",
						"private-instance-get",
						"#private-instance-get",
						"public-abstract-get",
						"protected-abstract-get",
						"public-get",
						"protected-get",
						"private-get",
						"#private-get",
						"static-get",
						"instance-get",
						"abstract-get",
						"get",
						"public-instance-set",
						"protected-instance-set",
						"private-instance-set",
						"#private-instance-set",
						"public-abstract-set",
						"protected-abstract-set",
						"public-set",
						"protected-set",
						"private-set",
						"static-set",
						"instance-set",
						"abstract-set",
						"set",
						"public-static-method",
						"protected-static-method",
						"private-static-method",
						"#private-static-method",
						"public-constructor",
						"protected-constructor",
						"private-constructor",
						"constructor",
						"public-instance-method",
						"protected-instance-method",
						"private-instance-method",
						"#private-instance-method",
						"public-abstract-method",
						"protected-abstract-method",
						"public-method",
						"protected-method",
						"private-method",
						"static-method",
						"instance-method",
						"abstract-method",
						"method",
					],
					order: "alphabetically",
				},
			},
		],
		"@typescript-eslint/method-signature-style": [
			"error",
			"method",
		],
		"@typescript-eslint/naming-convention": [
			"error",
			{
				format: [
					"camelCase",
				],
				leadingUnderscore: "require",
				modifiers: [
					"unused",
				],
				selector: "parameter",
			},
			{
				format: [
					"PascalCase",
				],
				selector: "typeLike",
			},
			{
				format: [
					"camelCase",
				],
				leadingUnderscore: "allow",
				modifiers: [
					"private",
				],
				selector: "memberLike",
			},
			{
				format: [
					"camelCase",
				],
				leadingUnderscore: "forbid",
				selector: "default",
				trailingUnderscore: "forbid",
			},
		],
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-dupe-class-members": "error",
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-extra-parens": [
			"error",
			"all",
			{
				nestedBinaryExpressions: false,
			},
		],
		"@typescript-eslint/no-extra-semi": "error",
		"@typescript-eslint/no-extraneous-class": [
			"error",
			{
				allowStaticOnly: true,
			},
		],
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-invalid-this": "error",
		"@typescript-eslint/no-invalid-void-type": "error",
		"@typescript-eslint/no-loop-func": "error",
		"@typescript-eslint/no-loss-of-precision": "error",
		"@typescript-eslint/no-magic-numbers": [
			"error",
			{
				enforceConst: true,
				ignore: [
					-1,
					0,
					1,
				],
				ignoreEnums: true,
				ignoreNumericLiteralTypes: true,
				ignoreReadonlyClassProperties: true,
			},
		],
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-redeclare": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-throw-literal": "error",
		"@typescript-eslint/no-type-alias": [
			"error",
			{
				allowAliases: "in-unions-and-intersections",
				allowGenerics: "always",
				allowLiterals: "in-unions-and-intersections",
			},
		],
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unused-expressions": [
			"error",
			{
				allowTernary: true,
			},
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/no-use-before-define": "error",
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/parameter-properties": [
			"error",
			{
				allow: [
					"private readonly",
					"private",
					"protected readonly",
					"protected",
					"public readonly",
					"public",
				],
			},
		],
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-readonly-parameter-types": "off",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/require-await": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/restrict-template-expressions": "error",
		"@typescript-eslint/return-await": "error",
		"@typescript-eslint/semi": "error",
		"@typescript-eslint/space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				asyncArrow: "always",
				named: "never",
			},
		],
		"@typescript-eslint/strict-boolean-expressions": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/typedef": "error",
		"@typescript-eslint/unbound-method": [
			"error",
			{
				ignoreStatic: true,
			},
		],
		"@typescript-eslint/unified-signatures": "error",
		"arrow-body-style": [
			"error",
			"as-needed",
		],
		"arrow-parens": [
			"error",
			"always",
		],
		"brace-style": [
			"error",
			"1tbs",
		],
		"camelcase": "off",
		"capitalized-comments": [
			"error",
			"always",
		],
		"class-methods-use-this": "off",
		"comma-dangle": [
			"error",
			"always-multiline",
		],
		"comma-spacing": "off",
		"complexity": "error",
		"constructor-super": "error",
		"curly": [
			"error",
			"multi-line",
		],
		"default-case": "error",
		"default-param-last": "off",
		"dot-notation": "off",
		"eol-last": [
			"error",
			"always",
		],
		"eqeqeq": [
			"error",
			"always",
		],
		"func-call-spacing": "off",
		"import/default": "error",
		"import/export": "error",
		"import/first": "error",
		"import/named": "error",
		"import/namespace": "error",
		"import/newline-after-import": "error",
		"import/no-default-export": "error",
		"import/no-duplicates": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{
				optionalDependencies: false,
			},
		],
		"import/no-internal-modules": "off",
		"import/no-named-as-default": "warn",
		"import/no-named-as-default-member": "warn",
		"import/no-unassigned-import": "error",
		"import/no-unresolved": "error",
		"import/no-useless-path-segments": "error",
		"import/order": [
			"error",
			{
				"alphabetize": {
					order: "asc",
				},
				"newlines-between": "always",
			},
		],
		"indent": "off",
		"init-declarations": "off",
		"jsdoc/check-alignment": "error",
		"jsdoc/check-syntax": "error",
		"jsdoc/check-tag-names": [
			"error",
			{
				definedTags: [
					"openapi",
				],
			},
		],
		"jsdoc/empty-tags": "error",
		"keyword-spacing": "off",
		"linebreak-style": [
			"error",
			"unix",
		],
		"lines-between-class-members": "off",
		"max-classes-per-file": [
			"error",
			1,
		],
		"max-len": [
			"error",
			maxLen,
		],
		"max-lines": [
			"error",
			maxLines,
		],
		"new-parens": "error",
		"newline-per-chained-call": "off",
		"no-array-constructor": "off",
		"no-caller": "error",
		"no-console": "error",
		"no-dupe-class-members": "off",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "off",
		"no-empty": "error",
		"no-empty-function": "off",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-extra-parens": "off",
		"no-extra-semi": "off",
		"no-fallthrough": "error",
		"no-invalid-this": "error",
		"no-irregular-whitespace": "error",
		"no-loop-func": "off",
		"no-loss-of-precision": "off",
		"no-magic-numbers": "off",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxBOF: 0,
				maxEOF: 0,
			},
		],
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-plusplus": [
			"error",
			{
				allowForLoopAfterthoughts: true,
			},
		],
		"no-redeclare": "error",
		"no-restricted-globals": [
			"error",
			"clearInterval",
			"clearTimeout",
			"fdescribe",
			"fit",
			"setInterval",
			"setTimeout",
		],
		"no-restricted-syntax": [
			"error",
			"ForInStatement",
		],
		"no-return-await": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-unsafe-finally": "error",
		"no-unused-expressions": "off",
		"no-unused-labels": "error",
		"no-unused-vars": "off",
		"no-use-before-define": "off",
		"no-useless-constructor": "off",
		"no-var": "error",
		"no-void": [
			"error",
			{
				allowAsStatement: true,
			},
		],
		"object-shorthand": "error",
		"padded-blocks": [
			"error",
			{
				blocks: "never",
				classes: "always",
				switches: "never",
			},
		],
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				next: "return",
				prev: "*",
			},
			{
				blankLine: "always",
				next: "block-like",
				prev: "*",
			},
			{
				blankLine: "always",
				next: "*",
				prev: "block-like",
			},
		],
		"prefer-const": "error",
		"prefer-object-spread": "error",
		"prefer-template": "error",
		"quote-props": [
			"error",
			"consistent-as-needed",
		],
		"quotes": "off",
		"require-await": "off",
		"semi": "off",
		"sort-imports": "off",
		"sort-keys": "error",
		"sort-vars": "error",
		"space-before-function-paren": "off",
		"space-in-parens": [
			"error",
			"never",
		],
		"template-curly-spacing": "error",
		"unicode-bom": [
			"error",
			"never",
		],
		"use-isnan": "error",
		"yoda": "error",
	},
};
