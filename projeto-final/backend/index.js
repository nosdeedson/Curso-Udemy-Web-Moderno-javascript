const express = require('express')
const app = express()
const consign = require('./node_modules/consign')

const db = require('./config/db.js')

app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)
app.listen(3000, () =>{
    console.log("rodando backend")
})