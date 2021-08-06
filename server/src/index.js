const app = require('./app')
const knex = require('knex')
const { PORT, DB_URL } = require('./config');

let db = knex({
    client: 'pg',
    connection: DB_URL,
	ssl: {
		"require": true,
		"rejectUnauthorized": false
	}
})

app.set('db', db)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
