var express = require('express');
var router = express.Router();
var auth = require('../../../helper/auth');

router.get('/', auth.authenticateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;