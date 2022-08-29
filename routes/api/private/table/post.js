var express = require('express');
var router = express.Router();
const auth = require('../../../../helper/auth');
var connect = require('../../../../helper/connect');

router.post('/', auth.authenticateToken, async (req, res) => {
  var objet = { 
    name: req.body.name,
    user: req.user._id,
  };
  connect.db.collection("tables")
  .findOne(objet)
  .then((response)=> {
      if (response == null) {
        connect.db.collection("tables")
        .insertOne({...objet, date: new Date.now()}).then((response1)=>{
          res.json({message: "succes", ...response1});
        });
      } else {
        res.json({message: "cette tables existe déja"});
      }
  });
  
});

module.exports = router;