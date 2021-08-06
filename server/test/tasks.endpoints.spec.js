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
        // due_date: new Date('2021-08-20T07:00:00.00Z'),
        due_date: moment.utc().local().format("YYYY-MM-DD hh:mm A"),
        completed: "N",
        user_id: testUser.user_id,
        test: true
      }
      
      let postResponse = await supertest(app)
        .post("/api/tasks")
        .set("Authorization", helpers.makeAuthHeader(testUser))
        .send({ payload })
        .expect(201)

      console.log("post response", postResponse.body);
    
      let attributes = postResponse.body;
      expect(postResponse.status).to.eql(201);
      expect(attributes.task_title).to.eql(payload.task_title);
      expect(attributes.task_description).to.eql(payload.task_description);
      expect(attributes.due_date).to.eql(payload.due_date);
      expect(attributes.completed).to.eql(payload.completed);
      expect(attributes.user_id).to.eql(payload.user_id);
      expect(postResponse.headers.location).to.eql(`/api/tasks/${attributes.task_id}`)
        
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
})