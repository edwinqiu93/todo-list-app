module.exports = {
    PORT: process.env.PORT || 3100,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DATABASE_URL || "postgresql://eqiu@127.0.0.1/todo-list-db",
    JWT_EXPIRY: process.env.JWT_EXPIRY || '5m',
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret'
}