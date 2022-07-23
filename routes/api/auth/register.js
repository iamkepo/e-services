var express = require('express');
var router = express.Router();
var connect = require('../../../helper/connect');

router.post('/', async (req, res) => {
  //console.log(req.body);
  var objet = { 
    email: req.body.email,
    password: req.body.password,
  };
  var quary = {email: req.body.email};
  connect.collection.users
  .findOne(quary)
  .then((response)=> {
      if (response == null) {
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