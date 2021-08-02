"use strict";

export function open(images, index = 0) {
	return { type: "OPEN_REACT_IMAGES", payload: { images, index } };
}

export function close() {
	return { type: "CLOSE_REACT_IMAGES" };
}
