"use strict";

// https://www.sitemaps.org/protocol.html#locdef
const xml = require("xml");

function createSiteMap(config) {
	const urls = config.urls.map((url) => {
		const array = [];
		if (url.url) array.push({ loc: config.hostname + url.url });
		for (const key of ["lastmod", "changefreq", "priority"]) {
			if (url[key]) array.push({ [key]: url[key] });
		}
		return { url: array };
	});
	return xml([
		{
			urlset: [
				{ _attr: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" } },
				...urls,
			],
		},
	], { declaration: true, indent: process.env.NODE_ENV !== "production" });
}

module.exports = createSiteMap;
