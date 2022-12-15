var express = require('express');
const { getUsers } = require('../../../../controller/bouffe/users');
var router = express.Router();
var {authenticateToken} = require('../../../../middleware/bouffe/auth');

router.get('/', authenticateToken, (req, res) => {
  let query = req.user.role == 'client' ? {role: 'resto'} : {role: 'client'};
  query = req.user.role == 'admin' ? {} : query;
  getUsers(query, (err, result)=> {
    if (err) {
      res.sendStatus(400);
    }
    res.send(result);
  });
});

module.exports = router;