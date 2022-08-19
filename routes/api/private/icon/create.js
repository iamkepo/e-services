var express = require('express');
var router = express.Router();
var auth = require('../../../../helper/auth');

router.post('/', auth.authenticateToken, (req, res) => {
  var icons = require('../../../../strapping/icons');
  icons.get();
  res.json({message: "icons created susses"});
});

module.exports = router;