"use strict";

module.exports = {
	env: {
		node: true,
		commonjs: true,
		es6: true,
		browser: true
	},
	extends: [
		"airbnb"
	],
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			// "experimentalObjectRestSpread": true,
			jsx: true
		}
	},
	rules: {
		"no-console": "off",
		indent: [2, "tab"],
		"no-tabs": 0,
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"comma-dangle": ["error", "never"], // https://eslint.org/docs/rules/comma-dangle
		"padded-blocks": ["error", { classes: "always" }], // https://eslint.org/docs/rules/padded-blocks
		"import/no-unresolved": ["off"],
		"react/prop-types": ["off"],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/no-array-index-key": ["off"],
		"react/jsx-props-no-spreading": ["off"],
		"react/destructuring-assignment": ["off"],
		"no-underscore-dangle": ["off"],
		"no-plusplus": ["off"],
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
		"jsx-a11y/label-has-associated-control": ["off"],
		"jsx-a11y/click-events-have-key-events": ["off"], // TODO: apply it
		"jsx-a11y/no-noninteractive-element-interactions": ["off"],
		"jsx-a11y/no-static-element-interactions": ["off"],
		"no-param-reassign": ["off"],
		"no-trailing-spaces": ["off"],
		"no-alert": ["off"],
		"no-shadow": ["off"],
		"class-methods-use-this": ["off"], // Since we are using decorator
		"jsx-a11y/anchor-is-valid": ["off"],
		"react/no-access-state-in-setstate": ["off"], // Use immutable.js
		"no-restricted-syntax": ["off"]	// discuss later
	},
	overrides: [
		{
			files: ["*.*"],
			rules: {
				strict: "off"
			}
		}
	]
};
