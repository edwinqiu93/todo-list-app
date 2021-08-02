"use strict";
const express = require("express");
const router = express.Router();

router.get("/health-check", function (req, res) {
	return res.send("OK");
});

module.exports = router;
