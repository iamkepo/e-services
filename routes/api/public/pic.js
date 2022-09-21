const SerpApi = require('google-search-results-nodejs');
require('dotenv').config();

var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {

  const search = new SerpApi.GoogleSearch(process.env.G_API);
  const params = {
    q: "Apple",
    tbm: "isch",
    ijn: "0"
  };

  search.json(params, function(data) {
    res.json(data["images_results"]);
  });

});

module.exports = router;