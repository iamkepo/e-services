var express = require('express');
const { updateUser } = require('../../../../controller/bouffe/users');
const { authenticateToken } = require('../../../../middleware/bouffe/auth');
var router = express.Router();


router.put('/', authenticateToken, (req, res)=>{
  let data = {};
  if (req.body.attribut && req.body.value) {
    data[req.body.attribut] = req.body.value;
    data["update_date"] = new Date();
    updateUser(req.user.number, data, function (response) { res.send(response); });
  } else {
    res.sendStatus(402);
  }
});

module.exports = router;