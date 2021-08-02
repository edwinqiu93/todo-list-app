"use strict";

function classnames(...array) {
	return array
		.filter((item) => item != null && item.toString)
		.filter((item) => item !== false)
		.map((item) => item.toString())
		.join(" ");
}

module.exports = classnames;
