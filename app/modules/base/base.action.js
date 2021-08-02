"use strict";

export const setKeywords = (keywords) => ({
	type: "SET_KEYWORDS",
	payload: { keywords },
});

export const setSidebar = (show) => ({
	type: "SET_SIDEBAR",
	payload: { show },
});

export const setUser = (user, access_token) => ({
	type: "SET_USER",
	payload: { user, access_token },
});
