"use strict";
const TasksService = require("./tasks.service");
const path = require("path");
const moment = require("moment");

async function createTask(req, res, next) {
    let { payload : { task_title, task_description, due_date } } = req.body;
    let db = req.app.get("db");

    if (!task_title) {
        return res.stautus(400).json("Please fill in a Task Title before submitting");
    }

    let newTask = { task_title, task_description, due_date, user_id: req.user.user_id };

    return TasksService.addTask(db, newTask)
            .then(task => {
                if (task.due_date) {
                    task.due_date = moment.utc(task.due_date).local().format("YYYY-MM-DD hh:mm:ss A");
                }
                return res.status(201)
                    .location(path.posix.join(req.originalUrl, `/${task.task_id}`))
                    .json(TasksService.serializeTask(task))
            })
            .catch(next)
}

module.exports = {
    createTask
}