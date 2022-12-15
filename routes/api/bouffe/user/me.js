var express = require('express');
var router = express.Router();
var {authenticateToken} = require('../../../../middleware/bouffe/auth');

router.get('/', authenticateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;