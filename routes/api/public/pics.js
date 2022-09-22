const GoogleImages = require('google-images');
require('dotenv').config();

var express = require('express');
var router = express.Router();

router.get('/:name/:page', async (req, res) => {
  const client = new GoogleImages(process.env.G_ID, process.env.G_API);
  if (parseInt((0+req.params.page)) < 0) {
    client.search(req.params.name, { page : 1 })
    .then(images => res.json(images))
    .catch(e => res.send(e));
  } else {
    client.search(req.params.name, { page : parseInt((0+req.params.page)) })
    .then(images => res.json(images))
    .catch(e => res.send(e));
  }
	
});

module.exports = router;