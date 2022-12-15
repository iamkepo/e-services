var express = require('express');
const { deleteUser } = require('../../../../controller/bouffe/users');
const { authenticateToken } = require('../../../../middleware/bouffe/auth');
var router = express.Router();


router.delete('/', authenticateToken, (req, res)=>{
  deleteUser(req.user.number, function (response) { res.send(response); });
});

module.exports = router;