var express = require('express');
const { getUser } = require('../../../../controller/bouffe/users');
const { generateAccessToken, generateRefreshToken } = require('../../../../middleware/bouffe/auth');
var router = express.Router();

router.post('/', (req, res) => {

  getUser(req.body.number, (response)=> {
    if (response == null) {
      res.sendStatus(400);
    } else {
      const accessToken = generateAccessToken(response);
      const refreshToken = generateRefreshToken(response);
      res.send({ accessToken, refreshToken });
    }
  });
  
});

module.exports = router;