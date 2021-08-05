"use strict";
const validate = require("express-joi-verifier");
const PromiseRouter = require("express-promise-router");
const auth = require("../utils/auth");
const controller = require("./tasks.controller.js");
const router = PromiseRouter();

router
    .route("/")
    .get(auth)
    .post(auth, controller.createTask)

module.exports = router;