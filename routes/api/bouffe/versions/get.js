var express = require('express');
const { getVersions } = require('../../../../controller/bouffe/version');
var router = express.Router();


router.get('/', async (req, res)=>{
  getVersions(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
     } else {
        if (result) {
          res.json({response: result});
        } else {
          res.sendStatus(402);
        }
      }
    });
});

module.exports = router;