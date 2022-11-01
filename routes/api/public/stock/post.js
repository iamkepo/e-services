var express = require('express');
var router = express.Router();
var {db} = require('../../../../model/connect');

router.post('/', async (req, res) => {

  switch (req.body.table) {
    case "mails":
      db.collection("mails")
      .findOne({email: req.body.data.email})
      .then((response)=> {
        if (response == null) {
          db.collection("mails")
          .insertOne(req.body.data)
          .then(()=>{
            res.json({message: "cet email a été inscrit avec succès"});
          });
        } else {
          res.json({message: "cet email a été déjà inscrit"});
        }
      });
      break;
    case "messages":
      db.collection("messages")
      .insertOne(req.body.data)
      .then((response)=>{
        res.json(response);
      });
      break;
  
    default:
      res.json({message: "table invalid"});
      break;
  }
  
});

module.exports = router;