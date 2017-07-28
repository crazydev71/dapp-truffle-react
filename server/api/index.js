const router = require('express').Router()
const chalk = require('chalk')
const db = require('../db/database')
const users = db.model('users')
//const AuthenticationController = require('../auth/authentication')
//const passportService = require('../auth/passport')
//const passport = require('passport')

//PASSPORT LOGIN & AUTHENTICATION
// Middleware to require login/auth
//const requireAuth = passport.authenticate('jwt', { session: false, failureRedirect: '/api/fail' })
//const requireLogin = passport.authenticate('local', { session: false,  failureRedirect: '/api/fail' })

// router.post('/login',
//   requireLogin,
//   AuthenticationController.login)

// router.get('/fail', (req, res, next) => {
//   console.log('Login/Auth Failed')
//   res.status(401).send('Login/Auth Failed')
// })

// router.use('*', requireAuth)
// //PASSPORT LOGIN & AUTHENTICATION - END*/

//delegate to further api routes
// '/api/default'
//router.use('/default', require('./defaultAPI'))

// API route
router.get('/', (req, res, next) => {
  console.log('request received: sending a response')
  res.send('hello from the server side')
})

module.exports = router;
