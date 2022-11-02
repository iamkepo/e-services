var express = require('express');
const { getImagesByQuery, addImages, trieOneImages } = require('../../../controller/images');
const { getGoogleImages } = require('../../../strapping/googleSearch');
var router = express.Router();

router.get('/:query/:limit', (req, res) => {
  console.log(req.params.query);
  getImagesByQuery(req.params.query, (err, result) => {
    if (err) {
      res.sendStatus(400)
    }
    if (result.length > 0) {
      res.send(trieOneImages(req.params.limit, result));
    } else {
      getGoogleImages(req.params.query, (error, data) => {
        if (error) {
          res.sendStatus(500)
        }
        if (data) {
          if (data.length > 0) {
            let list = data.map(el=>({...el, query: req.params.query}));
            addImages(list, ()=> res.redirect(trieOneImages(req.params.index, list).url)) 
          }else{
            res.sendStatus(501)
          }
        }
      })
    }
  })
});

module.exports = router;