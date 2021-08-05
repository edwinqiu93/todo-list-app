"use strict";
const TasksService = require("./tasks.service");
const path = require("path");
const moment = require("moment");
const logger = require("../../logger");

async function createTask(req, res, next) {
    let { payload : { task_title, task_description, due_date, completed } } = req.body;
    let db = req.app.get("db");

    if (!task_title) {
        return res.stautus(400).json("Please fill in a Task Title before submitting");
    }

    console.log("payload", req.body.payload);

    let newTask = { task_title, task_description, completed, user_id: req.user.user_id };

    due_date ? newTask.due_date = due_date : null;

    return TasksService.addTask(db, newTask)
            .then(task => {
                if (task.due_date) {
                    task.due_date = moment.utc(task.due_date).local().format("YYYY-MM-DD hh:mm A");
                }
                return res.status(201)
                    .location(path.posix.join(req.originalUrl, `/${task.task_id}`))
                    .json(TasksService.serializeTask(task))
            })
            .catch(next)
}

async function getAllTasks(req, res, next) {
    let db = req.app.get('db');
        
    return TasksService.getAllTasks(db, req.user.user_id)
        .then(tasks => {
            res.json(tasks.map((task) => {
                if (task.due_date) {
                    task.due_date = moment.utc(task.due_date).local().format("YYYY-MM-DD hh:mm A");
                }

                return TasksService.serializeTask(task);
            }))
        })
        .catch(next)
}

async function deleteTask(req, res, next) {
    let db = req.app.get('db');
    let { task_id } = req.params;
    console.log("task id", task_id)

    return TasksService.getById(db, task_id)
            .then(task => {
                console.log("task", task);
                if (!task) {
                    return res.status(404).send(`Please select a valid Task.`)
                }
                return TasksService.deleteTask(db, task_id)
                    .then(data => {
                        logger.info(`task id ${task_id} was deleted.`)
                        return res.status(204).end();
                    })
                    .catch(next)
            })
            .catch(next)
}

module.exports = {
    createTask,
    getAllTasks,
    deleteTask
}