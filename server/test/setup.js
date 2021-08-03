process.env.TZ = "UTC";
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-jwt-secret";
process.env.JWT_EXPIRY = "5m";

require("dotenv").config();

process.env.TEST_DB_URL = process.env.TEST_DB_URL
  || "postgresql://eqiu@localhost/todo-list-db-test"


const expect = require("chai").expect;
const supertest = require("supertest");

global.expect = expect;
global.supertest = supertest;
