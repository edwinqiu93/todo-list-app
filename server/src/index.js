const app = require('./app')
const knex = require('knex')
const { PORT, DB_URL } = require('./config');
console.log("url", DB_URL);

let db = knex({
    client: 'pg',
    connection: DB_URL
})

app.set('db', db)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})