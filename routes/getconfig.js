var express = require('express');
var router = express.Router();
var connect = require('../db/connect');

router.get('/', (req, res) => {
  const data = connect.config;
  connect.collection.cellules
  .find({})
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
   } else {
      data.cellules = result;
      res.json(data);
    }
  });

});

module.exports = router;