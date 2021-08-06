# TODO List Project

## Demo

- Live Preview can be found at : https://quizzical-wozniak-ce172a.netlify.app/

## Setting Up Development 

- App

```shell
cd App
npm install
npm run dev
```

- Server

```shell
cd Server
mv example.env .env
npm install
npm run dev
```

## Creating Development Migrations and Seeding 

- Create User: `createuser testuser --interactive`
- Create DB: `createdb -U testuser todo-list-db`
- Create Tables : `npm run migrate`
- Seed Sample Data : `psql -U testuser -d todo-list-db -f ./seed/seed.users-table.sql` , `psql -U testuser -d todo-list-db -f ./seed/seed.tasks-table.sql`
- Repeat the above steps for a Test Database (todo-list-db-test)

## Build / Deploy Steps

- Deploying the Server

```shell
cd server
git init
heroku create
git push heroku master
```

- Deploying the Database

```shell
heroku addons:create heroku-postgresql:hobby-dev
heroku pg:credentials:url
```
- Update .env file with PROD_MIGRATION values from the heroku credentials above
- npm run deploy

## Technologies Used
  - Javascript
  - NextJS
  - NodeJS
  - Express
  - Redux
  - PostgreSQL
  - Mocha
  - Chai
  - Heroku
  - Netlify
  - Axios
  - Knex
