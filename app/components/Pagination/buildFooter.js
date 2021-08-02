"use strict";

/**
 * 
 * @param {number} offset 
 * @param {number} limit 
 * @param {number} count 
 * @param {number} maxPagesShow the total pages show on the Page Bar
 */
function build(offset, limit, count, maxPagesShow = 7) {

	const watchingPage = offset + 1;
	const totalPage = Math.ceil(count / limit);
	const midPage = Math.ceil(maxPagesShow / 2);

	const results = [];
	//Case that total page is lest than the page in the bar
	if (totalPage <= maxPagesShow)
		for (var i = 1; i <= totalPage; i++)
			results.push(i);
	else if (watchingPage <= midPage)
		for (var i = 1; i <= maxPagesShow; i++)
			results.push(i);
	else {
		if (totalPage - watchingPage > midPage - 2)
			for (var i = watchingPage - 3; i < watchingPage - 3 + maxPagesShow; i++)
				results.push(i);
		else
			for (var i = totalPage - maxPagesShow + 1; i <= totalPage; i++)
				results.push(i);
	}
	//Return an array according to the watching page and total page
	return results;
};

const getStartEnd = (offset, limit, count) => {
	const start = limit * offset + 1 > count ? 0 : limit * offset + 1;
	const end = start + limit > count ? count : start + limit - 1;
	return { start: start, end: end };
};

module.exports = build;
module.exports.build = build;
module.exports.getStartEnd = getStartEnd;
