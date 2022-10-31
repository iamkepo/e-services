var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../../public/demo/pics.html'), 
  'utf8', function(err, data){
    // console.log(err);
  res.send(data);})
});

module.exports = router;
