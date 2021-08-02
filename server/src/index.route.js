"use strict";
const express = require("express");
const router = express.Router();

router.get("/health-check", function (req, res) {
	return res.send("OK");
});

router.use("/user", require("./user/user.route"));

module.exports = router;
