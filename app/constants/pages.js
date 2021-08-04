"use strict";

const pages = [
	"Main",
	{
		type: "page",
		name: "To Do List",
		icon: "fa fa-home",
		page: "/dashboard",
	}
];

module.exports = pages.reduce((prev, curr) => {
	if (typeof curr === "string") return prev;
	if (Array.isArray(curr)) return [].concat(prev, curr);
	prev.push(curr);
	return prev;
}, []);

module.exports.sidebar = pages;
