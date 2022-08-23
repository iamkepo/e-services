var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', async (req, res) => {
  var objet = { 
    date: Date.now(),
    user_id: req.headers.user_id,
    type: req.headers.type,
  }; 
  //console.log(objet);
  objet.uri = "http://"+req.headers.host+"/files/"+objet.user_id+objet.date+(req.headers.type == 'image' ? ".png" : ".mp4");

  req.pipe(fs.createWriteStream('./uploads\\'+objet.user_id+objet.date+(req.headers.type == "image" ? '.png' : '.mp4')));

  res.json(objet);
});

module.exports = router;