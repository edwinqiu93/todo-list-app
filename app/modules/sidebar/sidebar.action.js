"use strict";

export function open(payload = {}) {
	return { type: "OPEN_SIDEBAR", payload };
}

export function close() {
	return { type: "CLOSE_SIDEBAR" };
}
