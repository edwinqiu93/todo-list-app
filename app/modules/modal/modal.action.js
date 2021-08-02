"use strict";

export function open(tag, payload = {}) {
	return { type: "OPEN_MODAL", payload: { tag, payload } };
}

export function close() {
	return { type: "CLOSE_MODAL" };
}
