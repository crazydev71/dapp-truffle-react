'use strict'
var Sequelize = require('sequelize')

const name = process.env.DATABASE_NAME || "dao"
const url =  process.env.DATABASE_URL || `postgres://localhost:5432/${name}`
const host = process.env.DATABASE_HOST || "localhost"
const details = {
  "host": host,
  "dialect": "postgres",
  "logging": false
}

// db instance
const db = module.exports = new Sequelize(url, details)
// require models
require('../db/models')

function sync(retries = 0, maxRetries = 5) {
  return db.sync({force: false})
  .then(() => {
    console.log('Synced models to DB')
  })
  .catch(fail => {
    console.log(fail)
  })
}

// Note that db.didSync is a promise, rather than returning a promise //
db.didSync = sync()
