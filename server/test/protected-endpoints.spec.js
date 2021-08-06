const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Protected endpoints', function() {
  let db;

  const {
    testUsers,
    testTasks
  } = helpers.makeArticlesFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db);
  })

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => helpers.cleanTables(db));

  afterEach('cleanup', () => helpers.cleanTables(db));

  beforeEach('insert users', () => {
    return db
        .from('users')
        .insert(testUsers)
  })
  beforeEach('insert tasks', () => {
    return db
        .from('tasks')
        .insert(testTasks)
  })
  


  const protectedEndpoints = [
    {
      name: 'GET /api/tasks',
      path: '/api/tasks',
      method: supertest(app).get,
    },
    {
      name: 'POST /api/tasks',
      path: '/api/tasks',
      method: supertest(app).post,
    },
    {
      name: 'DELETE /api/tasks/:task_id',
      path: '/api/tasks/1',
      method: supertest(app).delete,
    },
    {
      name: 'PATCH /api/tasks/:task_id',
      path: '/api/tasks/1',
      method: supertest(app).patch,
    }
  ]

  protectedEndpoints.forEach(endpoint => {
    describe(endpoint.name, () => {
      it(`responds 401 'Missing bearer token' when no bearer token`, () => {
        return endpoint.method(endpoint.path)
          .expect(401, `"Missing Bearer Token"`)
      })

      it(`responds 401 'Unauthorized request' when invalid JWT secret`, () => {
        const validUser = testUsers[0]
        const invalidSecret = 'bad-secret'
        return endpoint.method(endpoint.path)
          .set('Authorization', helpers.makeAuthHeader(validUser, invalidSecret))
          .expect(401, `"Unauthorized Request"`)
      })

      it(`responds 401 'Unauthorized request' when invalid sub in payload`, () => {
        const invalidUser = { user_id: 'user-not-existy'}
        return endpoint.method(endpoint.path)
          .set('Authorization', helpers.makeAuthHeader(invalidUser))
          .expect(401, '"Unauthorized Request"')
      })
    })
  })
})
