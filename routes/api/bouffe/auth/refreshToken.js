var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const { getUser } = require('../../../../controller/bouffe/users');
const { generateAccessToken } = require('../../../../middleware/bouffe/auth');

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
    getUser(user.number, (response)=> {
      if (response == null) {
        res.sendStatus(400);
      } else {
        delete user.iat;
        delete user.exp;
        const refreshedToken = generateAccessToken(user);
        res.send({
          accessToken: refreshedToken,
        });
      }
    });
  });
});

module.exports = router;
