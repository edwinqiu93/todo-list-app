"use strict";
const validate = require("express-joi-verifier");
const PromiseRouter = require("express-promise-router");
// const auth = require("../utils/auth");
const controller = require("./user.controller.js");
const router = PromiseRouter();

router
    .route("/register")
    .post(controller.registerAccount)

module.exports = router;