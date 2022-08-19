var express = require('express');
var router = express.Router();
var connect = require('../../../../../helper/connect');

router.get('/:group', (req, res) => {
  
  connect.db.collection("icons")
  .find({ "group.name": req.params.group.replaceAll("-", " ") })
  .project({ _id: 0, group: 0 })
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
    } else {
      res.json(result);
    }
  });

});

module.exports = router;