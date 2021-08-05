"use strict";
const agent = require("./agent");

async function createTask(payload) {
    return agent
        .get()
        .post("/api/tasks", { payload })
        .then(resp => resp.data)
}

async function getAllTasks() {
    return agent
        .get()
        .get("/api/tasks")
        .then(resp => resp.data)
}

module.exports = {
    createTask,
    getAllTasks
}