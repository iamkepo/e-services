var express = require('express');
const { getVisite, addVisite, updateVisite } = require('../../../../controller/visite');
var router = express.Router();

router.get('/:domainName', (req, res) => {

  console.log(req.params.domainName);
  // console.log(req._remoteAddress);
  getVisite(req.headers.origin, (data)=> {

    if (data == null) {
      addVisite({domainName: req.headers.origin, number: 1}, (data1)=> {
        res.send('1')
      })
    } else {
      updateVisite(req.headers.origin, {number: data.number+1}, (data2)=> {
        res.send(''+(data.number+1)+'')
      })
    }
    
  })

});

module.exports = router;