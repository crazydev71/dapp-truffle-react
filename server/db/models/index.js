'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.
const db = require('../database')

const User = require('./user')

// // http://docs.sequelizejs.com/manual/tutorial/associations.html#one-to-many-associations
// Associations here

module.exports = {
  User
}
