"use strict";

const HEIGHT_TO_LOAD = 0;

function onScrollToBottom(callback) {
	return function (event) {
		const { scrollHeight, scrollTop, clientHeight } = event.target;
		const bottom = scrollHeight - scrollTop <= (parseInt(clientHeight) + HEIGHT_TO_LOAD);
		if (bottom && callback) return callback();
	};
}

module.exports = onScrollToBottom;
