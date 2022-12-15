var express = require('express');
const { addVersion, getVersion } = require('../../../../controller/bouffe/version');
var router = express.Router();


router.post('/', async (req, res)=>{
  let newVersion = {...req.body, date: new Date()}
  getVersion(newVersion.code, function (response) { 
    if(response == null){
      addVersion(newVersion, function (response) { res.send(response); });
    } else {
      res.sendStatus(402);
    }
  })
  
});

module.exports = router;