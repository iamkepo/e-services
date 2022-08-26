var express = require('express');
const auth = require('../../../../helper/auth');
var router = express.Router();
var connect = require('../../../../helper/connect');

router.post('/', auth.authenticateToken, async (req, res) => {
  //console.log(req.body);
  var objet = { 
    data: req.body.data,
    table: req.body.table
  };
  connect.db.collection("datas")
  .insertOne(objet).then((response)=>{
    res.json(response);
  });
});

module.exports = router;