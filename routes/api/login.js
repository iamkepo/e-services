var express = require('express');
var router = express.Router();
const fs = require('fs');
var connect = require('../../helper/connect');
var auth = require('../../helper/auth');

router.post('/', async (req, res) => {
  //console.log(req.body);
  var objet = { 
    email: req.body.email,
    password: req.body.password,
  };
  connect.collection.users
  .findOne(objet)
  .then((response)=> {
    //console.log(response);
    if (response == null) {
      res.status(401).send('invalid credentials');
      return ;
    } else {
      const accessToken = auth.generateAccessToken(response);
      const refreshToken = auth.generateRefreshToken(response);
      res.send({
        accessToken,
        refreshToken,
      });
    }
  });

  
  
});

module.exports = router;