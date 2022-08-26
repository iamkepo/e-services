var express = require('express');
var router = express.Router();
const auth = require('../../../../helper/auth');
var connect = require('../../../../helper/connect');

router.post('/', auth.authenticateToken, async (req, res) => {
  //console.log(req.body);
  var objet = { 
    name: req.body.name,
    user: req.user._id,
  };
  var quary = {email: req.body.email};
  connect.db.collection("tables")
  .insertOne(objet).then((response)=>{
    res.json(response);
  });
  
});

module.exports = router;