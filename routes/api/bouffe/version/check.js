var express = require('express');
const { getLastVersion } = require('../../../../controller/bouffe/version');
var router = express.Router();


router.get('/:code', async (req, res)=>{
  getLastVersion(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } 
      if (result) {
        res.json({response: result[0].code == req.params.code});
      } else {
        res.sendStatus(402);
      }
    });
});

module.exports = router;