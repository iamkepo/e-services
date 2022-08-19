var express = require('express');
var router = express.Router();
const { ObjectId } = require('mongodb');
var connect = require('../../../../../helper/connect');
var auth = require('../../../../../helper/auth');

router.get('/:id', auth.authenticateToken, (req, res) => {
  connect.db.collection("users")
  .findOne({_id: ObjectId(req.params.id)}, { projection: { password: 0 } })
  .then((response)=> {
    if (response == null) {
      res.send('invalid credentials');
      return ;
    } else {
      res.json(response);
    }
  });
});

module.exports = router;