var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var auth = require('../../../helper/auth');

router.post('/', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401);
    }
    // TODO : check en bdd que le user a toujours les droit et qu'il existe toujours
    delete user.iat;
    delete user.exp;
    const refreshedToken = auth.generateAccessToken(user);
    res.send({
      accessToken: refreshedToken,
    });
  });
});

module.exports = router;
