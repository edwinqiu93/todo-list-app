require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3100,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DATABASE_URL || "postgresql://eqiu@localhost/todo-list-db",
    JWT_EXPIRY: process.env.JWT_EXPIRY || '5m',
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret'
}