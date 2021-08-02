"use strict";

function isServer() {
	return !process.browser;
}

module.exports = isServer;
