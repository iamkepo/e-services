var express = require('express');
const connect = require('../../../../helper/connect');
var router = express.Router();

router.get('/:group', (req, res) => {
  
  connect.db.collection("icons")
  .find({ group: req.params.group })
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