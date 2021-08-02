"use strict";

function isComponentType(type) {
	if (!type) return false;
	return ["default", "primary", "success", "info", "warning", "danger"].includes(type);
}

module.exports = isComponentType;
