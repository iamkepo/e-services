var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var screenshot = require('../../../strapping/screenshot');

router.get('/:url/:width/:height', async (req, res) => {

  if (fs.existsSync(path.join(__dirname, '../../../data/other/')+req.params.url+req.params.width+"."+req.params.height+".png")) {
    res.send(path.join(__dirname, '../../../data/other/')+req.params.url+req.params.width+"."+req.params.height+".png");
  } else {
    let url = await screenshot.get(req.params.url, { width: req.params.width, height: req.params.height });
    res.send(url);
  }

});

module.exports = router;