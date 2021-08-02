"use strict";
const axios = require("axios");
const TokenService = require("../services/token-service");
const store = require("../store");

function get() {
	// console.log("store", store.getStore().getState());
	const access_token = store.getStore().getState().base.access_token;
	const headers = {};
	if (access_token)
		headers["Authorization"] = `Bearer ${access_token}`;
	const agent = axios.create({
		baseURL: process.env.NEXT_PUBLIC_DOMAIN,
		headers
	});
	return agent;
}

module.exports.get = get;
