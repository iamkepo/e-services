var express = require('express');
const { updateVersion } = require('../../../../controller/bouffe/version');
var router = express.Router();


router.put('/', async (req, res)=>{
  updateVersion(req.body.code, req.body, function (response) { res.send(response); });
});

module.exports = router;