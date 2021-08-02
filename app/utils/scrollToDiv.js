"use strict";

function scrollToDiv(id) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}

module.exports = scrollToDiv;
