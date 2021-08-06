"use strict";
const validate = require("express-joi-verifier");
const PromiseRouter = require("express-promise-router");
const requireAuth = require("../utils/auth");
const controller = require("./tasks.controller.js");
const router = PromiseRouter();

router
    .route("/")
    .get(requireAuth, controller.getAllTasks)
    .post(requireAuth, controller.createTask)

router
    .route("/:task_id")
    .delete(requireAuth, controller.deleteTask)
    .patch(requireAuth, controller.updateTask)

module.exports = router;