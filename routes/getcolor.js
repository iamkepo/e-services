var express = require('express');
var router = express.Router();
const { ObjectId } = require('mongodb');
var connect = require('../db/connect');

router.get('/:color', (req, res) => {
  connect.collection.testColors
  .findOne({_id: ObjectId(req.params.color)})
  .then((response)=> {
  //console.log(response.color);
  res.json(response.color);
  });

});

module.exports = router;