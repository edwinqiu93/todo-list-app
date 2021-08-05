"use strict";
const validate = require("express-joi-verifier");
const PromiseRouter = require("express-promise-router");
const auth = require("../utils/auth");
const controller = require("./tasks.controller.js");
const router = PromiseRouter();

router
    .route("/")
    .get(auth, controller.getAllTasks)
    .post(auth, controller.createTask)

router
    .route("/:id")
    .delete(auth, controller.deleteTask)

module.exports = router;