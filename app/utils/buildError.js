"use strict";

function build(error) {
	const message = error?.response?.data;
	if (message) return `Invalid action: \n${message}`;
	return `Unexpected Error \n${error.message}`;
}

module.exports = build;
