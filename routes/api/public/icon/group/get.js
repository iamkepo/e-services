var express = require('express');
const connect = require('../../../../../helper/connect');
var router = express.Router();

router.get('/', (req, res) => {
  
  connect.db.collection("group_icons")
  .find({})
  .project({ link: 0 })
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
    } else {
      res.json(result);
    }
  });

});

module.exports = router;