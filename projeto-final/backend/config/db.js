const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) //executes the migrations when the application is started

module.exports = knex