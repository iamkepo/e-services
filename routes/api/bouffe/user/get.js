var express = require('express');
const { getUser } = require('../../../../controller/bouffe/users');
var router = express.Router();
var {authenticateToken} = require('../../../../middleware/bouffe/auth');

router.get('/:number', authenticateToken, (req, res) => {
  getUser(req.params.number, (response)=> {
    if (response == null) {
      res.sendStatus(400);
    } else {
      res.send(response);
    }
  });
});

module.exports = router;