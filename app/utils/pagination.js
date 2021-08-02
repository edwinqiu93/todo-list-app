"use strict";

function calculate(offset, limit, count, maxPagesShow = 7) {
	const watchingPage = offset + 1;
	const totalPage = Math.ceil(count / limit);
	const midPage = Math.ceil(maxPagesShow / 2);
	const results = [];
	// Case that total page is lest than the page in the bar
	if (totalPage <= maxPagesShow) for (var i = 1; i <= totalPage; i++) results.push(i);
	else if (watchingPage <= midPage) for (var i = 1; i <= maxPagesShow; i++) results.push(i);
	else if (totalPage - watchingPage > midPage - 2) for (var i = watchingPage - 3; i < watchingPage - 3 + maxPagesShow; i++) results.push(i);
	else for (var i = totalPage - maxPagesShow + 1; i <= totalPage; i++) results.push(i);
	// Return an array according to the watching page and total page
	return results;
}

// function describe(offset, limit, count) {
// 	const start = count === 0 ? 0 : limit * offset + 1;
// 	const end = (start + limit) > count ? count : start + limit - 1;
// 	return { start, end };
// }

function describe(offset, limit, count) {
	const start = count === 0 ? 0 : limit * offset + 1;
	const end = (start + limit) > count ? count : start + limit - 1;
	return `Showing ${start} to ${end} of ${count} entries`;
}


module.exports = {
	calculate, describe,
};
