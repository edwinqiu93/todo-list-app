"use strict";

const webpack = require("webpack");
const path = require("path");

const config = {

	distDir: process.env.NODE_ENV === "production" ? "build" : void 0,

	webpack(config, options) {
		config.plugins.push(
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/),
		);
		// absolute-import
		// https://github.com/zeit/next.js/blob/master/examples/with-absolute-imports/next.config.js
		config.resolve.alias.components = path.join(__dirname, "components");
		config.resolve.alias.modules = path.join(__dirname, "modules");
		config.resolve.alias.constants = path.join(__dirname, "constants");
		config.resolve.alias.api = path.join(__dirname, "api/index.js");
		config.resolve.alias.utils = path.join(__dirname, "utils");			
		return config;
	},

};

module.exports = config;
