var express = require('express');
var router = express.Router();
var connect = require('../../../../helper/connect');

router.post('/', async (req, res) => {
  
  connect.db.collection(req.body.table)
  .insertOne(req.body.data)
  .then((response)=>{
    res.json(response);
  });
  
});

module.exports = router;