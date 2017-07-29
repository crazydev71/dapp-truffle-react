const jwt = require('jsonwebtoken')
const user = /////
const secret = /////

function generateToken(user) {
  return jwt.sign(user, secret, {
    expiresIn: 604800 // in seconds 604800 = 1 week
  })
}

function login(req, res, next){
  res.status(200).json({
    token: generateToken(user),
    user: {
      _id: user._id
    }
  })
}

module.exports = {
  login
}
