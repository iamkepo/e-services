var express = require('express');
var router = express.Router();
var auth = require('../../../../helper/auth');
var icons = require('../../../../strapping/icons');

router.post('/', auth.authenticateToken, async(req, res) => {
  if (req.user.type == "admin") {
    await icons.get();
    res.send({message: "succes"});
  } else {
    res.send({message: "auth type"});
  }
  
});

module.exports = router;