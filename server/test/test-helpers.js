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
      userid: 'test-user-1',
      password: 'password',
    },
    {
      userid: 'test-user-2',
      password: 'password-2',
    },
    {
      userid: 'test-user-3',
      password: 'password-3',
    },
    {
      userid: 'test-user-4',
      password: 'password-4',
    },
    {
      userid: 'test-user--5',
      password: 'password-5',
    }
  ]
}

function makeTasksArray(users) {
  return [
    {
      taskid: 1,
      tasktitle: 'First task title',
      taskdescription: 'First task script',
      duedate:  new Date('2022-01-22T07:00:00.00Z'),
      userid: users[0].userid
    },
    {
      taskid: 2,
      tasktitle: 'Second task title',
      taskdescription: 'Second task script',
      duedate:  new Date('2022-02-22T07:00:00.00Z'),
      userid: users[1].userid
    },
    {
      taskid: 3,
      tasktitle: 'Third task title',
      taskdescription: 'Third task script',
      duedate:  new Date('2022-03-22T07:00:00.00Z'),
      userid: users[2].userid
    },
    {
      taskid: 4,
      tasktitle: 'Fourth task title',
      taskdescription: 'Fourth task script',
      duedate:  new Date('2022-04-22T07:00:00.00Z'),
      userid: users[3].userid
    },
    {
      taskid: 5,
      tasktitle: 'Fifth task title',
      taskdescription: 'Fifth task script',
      duedate:  new Date('2022-05-22T07:00:00.00Z'),
      userid: users[4].userid
    }  
  ]
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        tasks,
        users
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE tasks_taskid_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('tasks_taskid_seq', 0)`)
      ])
    )
  )
}

function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('users').insert(preppedUsers)
    .then(() =>
      // update the auto sequence to stay in sync
      db.raw(
        `SELECT setval('users_id_seq', ?)`,
        [users[users.length - 1].id],
      )
    )
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.username,
    algorithm: 'HS256',
  })
  return `bearer ${token}`
}

module.exports = {
  makeUsersArray,
  makeTasksArray,
  makeArticlesFixtures,
  makeAuthHeader,
  cleanTables,
  seedUsers
}
