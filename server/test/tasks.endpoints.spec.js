const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");
const moment = require("moment");

describe("Task Endpoints", function() {
  let db;

  const {
    testTasks,
    testUsers,
  } = helpers.makeArticlesFixtures();

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL,
    })
    app.set("db", db);
  })

  after("disconnect from db", () => db.destroy());

  before("cleanup", () => helpers.cleanTables(db));

  afterEach("cleanup", () => helpers.cleanTables(db));

  describe(`POST /api/tasks`, () => {
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

    it(`Creates a Task, responding with 201 and the new Task`, async ()  => {
      this.retries(3);
      const testUser = testUsers[0];
      const payload = {
        task_title: "Test Title 001",
        task_description: "Test Description 001",
        due_date: moment.utc().local().format("YYYY-MM-DD hh:mm A"),
        completed: "N",
        user_id: testUser.user_id,
        test: true
      }

      return supertest(app)
        .post("/api/tasks")
        .set("Authorization", helpers.makeAuthHeader(testUser))
        .send({ payload })
        .expect(201)
        .expect(res => {
          expect(res.status).to.eql(201);
          expect(res.body.task_title).to.eql(payload.task_title)
          expect(res.body.task_description).to.eql(payload.task_description)
          expect(res.body.due_date).to.eql(payload.due_date)
          expect(res.body.completed).to.eql(payload.completed)
          expect(res.body.user_id).to.eql(payload.user_id)
          expect(res.headers.location).to.eql(`/api/tasks/${res.body.task_id}`)
        })
        .expect(res =>
          db
            .from('tasks')
            .select('*')
            .where({ task_id: res.body.task_id })
            .first()
            .then(row => {
              expect(row.task_title).to.eql(payload.task_title)
              expect(row.task_description).to.eql(payload.task_description)
              expect(row.due_date).to.eql(payload.due_date)
              expect(row.completed).to.eql(payload.completed)
            })
        )
    })

    const requiredFields = ["task_title"];

    requiredFields.forEach(field => {
      const testUser = testUsers[0];
      const payload = {
        task_title: "Test Title 2",
        task_description: "Test Description 2",
        due_date: new Date('2021-09-20T07:00:00.00Z'),
        completed: "N",
        user_id: testUser.user_id,
      }

      it(`responds with 400 and an error message when the "${field}" is missing`, () => {
        delete payload[field];

        return supertest(app)
          .post("/api/tasks")
          .set("Authorization", helpers.makeAuthHeader(testUser))
          .send({ payload })
          .expect(400, `"Please fill in the ${field} field and resubmit"`)
      })
    })
  })


  describe(`GET /api/tasks`, () => {
    beforeEach('insert users', () => {
        return db
            .from('users')
            .insert(testUsers)
    })

    const testUser = testUsers[0];

    context(`No Tasks Inserted into Database`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/tasks')
          .set("Authorization", helpers.makeAuthHeader(testUser))
          .expect(200, [])
      })
    })

    context('When Tasks are Inserted into Database', () => {
        beforeEach('insert tasks', () => {
          return db
              .from('tasks')
              .insert(testTasks[0])
        })

      it('responds with 200 and all of the tasks', async () => {
        const expectedTasks = testTasks.filter(task => task.user_id == testUser.user_id).map(task =>
          helpers.makeExpectedTask(
            task,
            [testUser]
          )
        )

        console.log("EXPECTEDDDDD", expectedTasks);
        return supertest(app)
          .get('/api/tasks')
          .set("Authorization", helpers.makeAuthHeader(testUser))
          .expect(200, expectedTasks)
      })
    })

    context(`When a XSS attack occurs`, () => {
      const {
        maliciousTask,
        expectedTask
      } = helpers.makeMaliciousTask(testUser)

      beforeEach('insert malicious thing', () => {
        return db
            .from('tasks')
            .insert(maliciousTask)
      })

      it('removes XSS attack content', () => {
        return supertest(app)
          .get(`/api/tasks`)
          .set("Authorization", helpers.makeAuthHeader(testUser))
          .expect(200)
          .expect(res => {
            expect(res.body[0].task_title).to.eql(expectedTask.task_title)
            expect(res.body[0].task_description).to.eql(expectedTask.task_description)
          })
      })
    })
  })

  //delete tests

})