"use strict";
const codes = require("./codes.json");

class AppError {
	constructor(code, type, message, statusCode) {
		Error.call(this);
		Error.captureStackTrace(this);
		this.isAppError = true;
		this.code = code;
		this.type = type || codes[code];
		this.message = message;
		this.statusCode = statusCode;
	}
}

module.exports = AppError;