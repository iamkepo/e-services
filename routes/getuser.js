var express = require('express');
var router = express.Router();
const { ObjectId } = require('mongodb');
var connect = require('../db/connect');

router.get('/:userid', (req, res) => {
  var quary = {_id: ObjectId(req.params.userid)};
  connect.collection.users
  .findOne(quary)
  .then((response)=> {
      res.json(response);
  });

});

module.exports = router;