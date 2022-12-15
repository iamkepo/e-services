var express = require('express');
const { deleteVersion } = require('../../../../controller/bouffe/version');
var router = express.Router();


router.delete('/:code', async (req, res)=>{
  deleteVersion(req.params.code, function (response) { res.send(response); });
});

module.exports = router;