var express = require('express');
var router = express.Router();
var connect = require('../db/connect');

router.get('/', (req, res) => {
  var quary = {etat:false};
  connect.collection.testColors
  .find(quary)
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
   } else {
      //console.log(result.length);
      res.json(result[Math.floor( Math.random() * (result.length-0)+0 )]);
    }
  });

});

module.exports = router;