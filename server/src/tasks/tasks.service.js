const xss = require("xss");

const TasksService = {
    getAllTasks(knex, user_id) {
        return knex
            .select("*")
            .from("tasks")
            .where("user_id", user_id)
    },

    serializeTask(task) {
        return {
            task_id: task.task_id,
            task_title: xss(task.task_title),
            task_description: xss(task.task_description),
            due_date: task.due_date,
            completed: task.completed,
            user_id: task.user_id
        }
    },
    
    getById(knex, id) {
        return knex
            .select("*")
            .from("tasks")
            .where("task_id", id)
            .first()
    },

    addTask(knex, newTask) {
        return knex
            .from("tasks")
            .insert(newTask)
            .returning("*")
            .then(rows => {
                return rows[0]
            })
    },

    deleteTask(knex, id) {
        return knex
            .from("tasks")
            .where("task_id", id)
            .delete()
    },

    updateTask(knex, id, newData) {
        return knex
            .from("tasks")
            .where("task_id", id)
            .update(newData)
            .returning("*")
            .then(rows => {
                return rows[0]
            })
    }
}

module.exports = TasksService;