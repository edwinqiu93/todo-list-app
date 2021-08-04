"use strict";
const axios = require("axios");
import TokenService from "../services/token-service";

function get() {
	const access_token = TokenService.getAuthToken();
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
