var express = require('express');
var router = express.Router();
const { ObjectId } = require('mongodb');
var connect = require('../../../../helper/connect');
var auth = require('../../../../helper/auth');

router.get('/:id', auth.authenticateToken, (req, res) => {
  connect.db.collection("users")
  .find(req.params.id != "all" ? {_id: ObjectId(req.params.id), type: 'subscriber'} : {type: 'subscriber'})
  .project({ password: 0 })
  .toArray(function (err, result) {
    if (err) {
      res.status(400).send("Error fetching listings!");
    } else {
      res.json(result);
    }
  });
});

module.exports = router;