const knex = require("knex");
const bcrypt = require("bcryptjs");
const app = require("../src/app");
const helpers = require("./test-helpers");
const jwt = require("jsonwebtoken");

describe("Users Endpoints", function() {
  let db;

  const { testUsers } = helpers.makeArticlesFixtures();
  const testUser = testUsers[0];

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

  describe(`POST /api/user/register`, () => {
    context(`User Validation`, () => {
      beforeEach("insert users", () =>
        helpers.seedUsers(
          db,
          testUsers,
        )
      )

      const requiredFields = ["user_id", "password"];

      requiredFields.forEach(field => {
        const registerAttemptBody = {
          user_id: "test username",
          password: "test password"
        }

        it(`responds with 400 required error when "${field}" is missing`, () => {
          delete registerAttemptBody[field];

          return supertest(app)
            .post("/api/user/register")
            .send({ user: registerAttemptBody })
            .expect(400, `"Please fill in the ${field} field and resubmit."`)
        })
      })

      it(`responds 400 "Password must be longer than 8 characters" when empty password`, () => {
        const userShortPassword = {
          user_id: "test username",
          password: "1234567",  
        }
        
        return supertest(app)
          .post("/api/user/register")
          .send({ user: userShortPassword })
          .expect(400, '"Password must be longer than 8 characters"')
      })

      it(`responds 400 "Password must be less than 72 characters" when long password`, () => {
        const userLongPassword = {
          user_id: "test username",
          password: "*".repeat(73), 
        }

        return supertest(app)
          .post("/api/user/register")
          .send({ user: userLongPassword })
          .expect(400, '"Password must be less than 72 characters"')
      })

      it(`responds 400 error when password starts with spaces`, () => {
        const userPasswordStartsSpaces = {
          user_id: "test username",
          password: " 1Aa!2Bb@",  
        }

        return supertest(app)
          .post("/api/user/register")
          .send({ user: userPasswordStartsSpaces })
          .expect(400, '"Password must not start or end with empty spaces"')
      })

      it(`responds 400 error when password ends with spaces`, () => {
        const userPasswordEndsSpaces = {
          user_id: "test username",
          password: "1Aa!2Bb@ "
        }

        return supertest(app)
          .post("/api/user/register")
          .send({ user: userPasswordEndsSpaces })
          .expect(400, '"Password must not start or end with empty spaces"')
      })

      it(`responds 400 error when password isn"t complex enough`, () => {
        const userPasswordNotComplex = {
          user_id: "test username",
          password: "AAaabbccc"
        }
        
        return supertest(app)
          .post("/api/user/register")
          .send({ user: userPasswordNotComplex })
          .expect(400, '"Password must contain one Upper case, Lower case, and Number"')
      })

      it(`responds 400 "User name already taken" when username isn"t unique`, () => {
        const duplicateUser = {
          user_id: testUser.user_id,
          password: "11AAaa!!"
        }

        return supertest(app)
          .post("/api/user/register")
          .send({ user: duplicateUser })
          .expect(400, '"Username already taken"')
      })
    })

    context(`Happy path`, () => {
      it(`responds 200, sends JWT Token, and stores bcrypted password`, () => {
        const newUser = {
          user_id: "test_username",
          password: "11AAaa!!"
        }

        const userValidCreds = {
          user_id: newUser.user_id
        }
  
        return supertest(app)
          .post("/api/user/register")
          .send({ user: newUser })
          .expect(200)
          .then(res => {
            const expectedToken = jwt.sign(
              { user_id: newUser.user_id },
              process.env.JWT_SECRET,
              {
                subject: newUser.user_id,
                expiresIn: process.env.JWT_EXPIRY,
                algorithm: "HS256",
              }
            )
            expect(res.body.authToken).to.eql(expectedToken)
          })
      })
    })

  })

  describe(`POST /api/user/login`, () => {
    beforeEach("insert users", () =>
      helpers.seedUsers(
        db,
        testUsers,
      )
    )

    const requiredFields = ["user_id", "password"];

    requiredFields.forEach(field => {
      const loginAttemptBody = {
        user_id: testUser.user_id,
        password: testUser.password,
      }

      it(`responds with 400 required error when "${field}" is missing`, () => {
        delete loginAttemptBody[field];

        return supertest(app)
          .post("/api/user/login")
          .send({ user: loginAttemptBody })
          .expect(400, `"Please fill in the ${field} field and resubmit."`)
      })
    })

    it(`responds 400 "invalid username or password" when bad username`, () => {
      const userInvalidUser = { user_id: "user-not", password: "existy" };
      return supertest(app)
        .post("/api/user/login")
        .send({ user: userInvalidUser })
        .expect(400, '"Incorrect Username or Password"')
    })

    it(`responds 400 "invalid username or password" when bad password`, () => {
      const userInvalidPass = { user_id: testUser.user_id, password: "incorrect" };
      return supertest(app)
        .post("/api/user/login")
        .send({ user: userInvalidPass })
        .expect(400, '"Incorrect Username or Password"')
    })

    it(`responds 200 and JWT auth token using secret when valid credentials`, () => {
      const userValidCreds = {
        user_id: testUser.user_id,
        password: testUser.password,
      }

      const expectedToken = jwt.sign(
        { user_id: testUser.user_id },
        process.env.JWT_SECRET,
        {
          subject: testUser.user_id,
          expiresIn: process.env.JWT_EXPIRY,
          algorithm: "HS256",
        }
      )

      return supertest(app)
        .post("/api/user/login")
        .send({ user: userValidCreds })
        .expect(200, {
          authToken: expectedToken,
        })
    })
  })
  
})
