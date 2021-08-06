"use strict";
const express = require("express");
const router = express.Router();

router.get("/health-check", function (req, res) {
	return res.send("OK");
});

router.get("/", (req, res) => {
    res.send('Hello world!')
})

router.use("/user", require("./user/user.route"));
router.use("/tasks", require("./tasks/tasks.route"));

module.exports = router;
