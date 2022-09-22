const GoogleImages = require('google-images');
require('dotenv').config();

var express = require('express');
var router = express.Router();

router.get('/:name/:index', async (req, res) => {
  const client = new GoogleImages(process.env.G_ID, process.env.G_API);
	client.search(req.params.name)
  .then(images => {
    if (parseInt((0+req.params.index)) < 0) {
      res.redirect(images[0].url);
    } else if (parseInt((0+req.params.index)) > images.length-1) {
      res.redirect(images[images.length-1].url)
    } else {
      res.redirect(images[parseInt((0+req.params.index))].url);
    }
  })
  .catch(e => res.send(e));
});

module.exports = router;