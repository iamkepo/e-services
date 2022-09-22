const GoogleImages = require('google-images');
require('dotenv').config();

var express = require('express');
var router = express.Router();

router.get('/:name/:index', async (req, res) => {
  const client = new GoogleImages("24eeda5196c3f449b", process.env.G_API);
	client.search(req.params.name)
  .then(images => {
    if (req.params.index === "all") {
      res.send(images);
    } else {
      if (parseInt(req.params.index) < 0) {
        res.send(images[0].url);
      } else if (parseInt(req.params.index) > images.length-1) {
        res.send(images[images.length-1].url)
      } else {
        res.send(images[parseInt(req.params.index)].url);
      }
    }
  });
});

module.exports = router;