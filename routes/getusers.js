var express = require('express');
var router = express.Router();
const fs = require('fs');
var connect = require('../db/connect');

router.get('/', (req, res) => {
  connect.collection.users
  .find({})
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
   } else {
      var list = [];
      result.forEach(element => {
        var objet = {};
        for (const key in element) {
          if (key != "follower" && key != "following" && key != "bio") {
            objet[key] = element[key];
          }
        }
        list = [...list, objet]
      });
      res.json(list);
    }
  });

});

module.exports = router;