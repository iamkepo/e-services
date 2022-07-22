var express = require('express');
var router = express.Router();
const fs = require('fs');
var connect = require('../../helper/connect');
var auth = require('../../helper/auth');

router.get('/', auth.authenticateToken, (req, res) => {
  connect.collection.users
  .find({}).project({ password: 0 })
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
    } else {
      res.json(result);
    }
  });

});

module.exports = router;