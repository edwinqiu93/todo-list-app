"use strict";
const PromiseRouter = require("express-promise-router");
const requireAuth = require("../utils/auth");
const controller = require("./user.controller.js");
const router = PromiseRouter();

router
    .route("/register")
    .post(controller.registerAccount)

router
    .route("/login")
    .post(controller.login)

router
    .route("/refresh")
    .post(requireAuth, controller.refreshToken)

module.exports = router;