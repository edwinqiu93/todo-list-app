"use strict";
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compression = require("compression");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());

app.use("/api", require("./index.route"));

app.use((error, req, res, next) => {

	if (error.isAppError)
		error.status = error.statusCode || 400;

	switch (error.status) {
		case 404:
			res.status(error.status).json({
				error: {
					code: 1001,
					type: "NotFound"
				}
			});
			break;

		case 400:
		case 401:
		case 403:
			res.status(error.status).json({
				error: {
					code: error.code,
					type: error.type,
					message: error.message
				}
			});
			break;

		case 500:
		default:
			res.status(error.status || 500).json({
				error: {
					code: 1000,
					type: "InternalServerError"
				}
			});
			break;
	}

	return next(error);
});

module.exports = app;
