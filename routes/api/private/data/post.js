var express = require('express');
const auth = require('../../../../helper/auth');
var router = express.Router();
var connect = require('../../../../helper/connect');

router.post('/', auth.authenticateToken, async (req, res) => {
  
  connect.db.collection("tables")
  .findOne({name: req.body.table, user: req.user._id})
  .then((response)=> {
    if (response != null) {
      connect.db.collection("datas")
      .insertOne({ data: req.body.data, table: response._id, date: new Date.now()})
      .then((response1)=>{
        res.json({message: "succes", ...response1});
      });
    } else {
      res.json({message: `la table " ${req.body.table} " n'existe pas`});
    }
  });

});

module.exports = router;