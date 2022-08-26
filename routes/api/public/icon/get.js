var express = require('express');
const connect = require('../../../../helper/connect');
var router = express.Router();

router.get('/:group_id', (req, res) => {
  
  connect.db.collection("icons")
  .find({ group_id: req.params.group_id })
  .project({ _id: 0, group_id: 0 })
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
    } else {
      res.json(result);
    }
  });

});

module.exports = router;