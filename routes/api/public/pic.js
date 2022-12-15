var express = require('express');
const { getImagesByQuery, addImages, trieOneImage } = require('../../../controller/services/images');
const { getGoogleImages } = require('../../../strapping/googleSearch');
var router = express.Router();

router.get('/:query/:index', (req, res) => {
  console.log(req.params.query);
  getImagesByQuery(req.params.query, (err, result) => {
    if (err) {
      res.sendStatus(400)
    }
    if (result.length > 0) {
      res.redirect(trieOneImage(req.params.index, result).url)
    } else {
      getGoogleImages(req.params.query, (error, data) => {
        if (error) {
          res.sendStatus(500)
        }
        if (data) {
          if (data.length > 0) {
            let list = data.map(el=>({...el, query: req.params.query}));
            addImages(list, ()=> res.redirect(trieOneImage(req.params.index, list).url)) 
          }else{
            res.sendStatus(501)
          }
        }
      })
    }
  })
});

module.exports = router;