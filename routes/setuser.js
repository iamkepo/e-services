var express = require('express');
var router = express.Router();
const fs = require('fs');
var connect = require('../db/connect');

router.post('/', async (req, res) => {
  //console.log(req.body);
  var objet = { 
    psoeudo: req.body.psoeudo,
    email: req.body.email,
    password: req.body.password,
    palette: [req.body.color],
    solde: 0.00001067001,
    date: new Date().getTime()
  };
  var quary = {email: req.body.email};
  connect.collection.users
  .findOne(quary)
  .then((response)=> {
      //console.log(response);
      if (response == null) {
        connect.updateColor(req.body.color),
        connect.collection.users
        .insertOne(objet).then((response1)=>{
          res.json(response1);
        });
      } else {
        res.json({message: "cet email est déja lié à un compte"});
      }

  });
  
});

module.exports = router;