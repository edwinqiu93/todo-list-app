const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeArticlesFixtures() {
    const testUsers = makeUsersArray();
    const testTasks = makeTasksArray(testUsers);
    return {
        testUsers, 
        testTasks
    }
}


function makeUsersArray() {
  return [
    {
      user_id: 'test-user-1',
      password: 'password',
    },
    {
      user_id: 'test-user-2',
      password: 'password-2',
    },
    {
      user_id: 'test-user-3',
      password: 'password-3',
    },
    {
      user_id: 'test-user-4',
      password: 'password-4',
    },
    {
      user_id: 'test-user--5',
      password: 'password-5',
    }
  ]
}

function makeTasksArray(users) {
  return [
    {
      task_id: 1,
      task_title: 'First task title',
      task_description: 'First task script',
      due_date:  new Date('2022-01-22T07:00:00.00Z'),
      completed: 'N',
      user_id: users[0].user_id
    },
    {
      task_id: 2,
      task_title: 'Second task title',
      task_description: 'Second task script',
      due_date:  new Date('2022-02-22T07:00:00.00Z'),
      completed: 'N',
      user_id: users[1].user_id
    },
    {
      task_id: 3,
      task_title: 'Third task title',
      task_description: 'Third task script',
      due_date:  new Date('2022-03-22T07:00:00.00Z'),
      completed: 'N',
      user_id: users[2].user_id
    },
    {
      task_id: 4,
      task_title: 'Fourth task title',
      task_description: 'Fourth task script',
      due_date:  new Date('2022-04-22T07:00:00.00Z'),
      completed: 'Y',
      user_id: users[3].user_id
    },
    {
      task_id: 5,
      task_title: 'Fifth task title',
      task_description: 'Fifth task script',
      due_date:  new Date('2022-05-22T07:00:00.00Z'),
      completed: 'Y',
      user_id: users[4].user_id
    }  
  ]
}

function makeExpectedTask(task, users=[]) {

    const expectedUser = users.find(user => user.user_id === task.user_id)

    return {
      task_id: task.task_id,
      task_title: task.task_title,
      task_description: task.task_description,
      due_date: task.due_date,
      completed: task.completed,
      user_id: expectedUser.user_id
    }
}

function makeMaliciousTask(user) {
  const maliciousTask = {
    task_id: 911,
    task_title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    task_description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    due_date: new Date(),
    completed: "N",
    user_id: user.user_id
  }
  const expectedTask = {
    ...makeExpectedTask(maliciousTask, [user]),
    task_title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    task_description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousTask,
    expectedTask
  }
}

function seedMaliciousTask(db, user, task) {
  return seedUsers(db, [user])
    .then(() =>
      db
        .into('tasks')
        .insert([task])
    )
}

// function cleanTables(db) {
//   return db.transaction(trx =>
//     trx.raw(
//       `TRUNCATE
//         tasks,
//         users
//       `
//     )
//     .then(() =>
//       Promise.all([
//         trx.raw(`ALTER SEQUENCE tasks_task_id_seq minvalue 0 START WITH 1`),
//         trx.raw(`SELECT setval('tasks_task_id_seq', 0)`)
//       ])
//     )
//   )
// }
function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        tasks,
        users
      `
    )
  )
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('users').insert(preppedUsers);
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  console.log("SECRET", secret);
  const token = jwt.sign({ user_id: user.user_id }, secret, {
    subject: user.user_id,
    algorithm: 'HS256',
  })
  return `bearer ${token}`
}

module.exports = {
  makeUsersArray,
  makeTasksArray,
  makeArticlesFixtures,
  makeExpectedTask,
  makeMaliciousTask,
  seedMaliciousTask,
  makeAuthHeader,
  cleanTables,
  seedUsers
}
