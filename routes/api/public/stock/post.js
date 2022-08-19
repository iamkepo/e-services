var express = require('express');
var router = express.Router();
var connect = require('../../../../helper/connect');

router.post('/', async (req, res) => {
  if (req.body.table == "mails") {
    connect.db.collection(req.body.table)
    .findOne({email: req.body.data.email})
    .then((response)=> {
      if (response == null) {
        connect.db.collection(req.body.table)
        .insertOne(req.body.data)
        .then(()=>{
          res.json({message: "cet email a été inscrit avec succès"});
        });
      } else {
        res.json({message: "cet email a été déjà inscrit"});
      }
    });
  } else {
    res.json({message: "table invalid"});
  }
  
  
});

module.exports = router;