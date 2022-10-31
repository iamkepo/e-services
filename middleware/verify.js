const jwt = require('jsonwebtoken');
require('dotenv').config();

function commandToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, command) => {
    if (err) {
      return res.sendStatus(401);
    }
    req.command = command;
    next();
  });
}

function isValidJwt (token, callback) {
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, command) => 
  callback(err, command));
};

module.exports = {
  isValidJwt,
  commandToken
};