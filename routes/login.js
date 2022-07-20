var express = require('express');
var router = express.Router();
const fs = require('fs');
var connect = require('../db/connect');

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
      res.json({message: "cet email n'est pas encore lié à un compte"});
    } else {
      res.json(response._id);
    }
  });
  
});

module.exports = router;