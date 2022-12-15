var express = require('express');
const { getUser, addUser } = require('../../../../controller/bouffe/users');
var router = express.Router();

router.post('/', async (req, res) => {
  //console.log(req.body);
  var objet = { 
    ...req.body,
    solde: 0,
    // referal_codes: [Math.floor(Math.random()*100000)],
    create_date: new Date(),
    update_date: new Date(),
    connexion_date: new Date()
  };
  getUser(req.body.number, (response)=> {
    if (response == null) {
      addUser(objet, (response1)=>{
        res.send(response1);
      });
    } else {
      res.sendStatus(400);
    }
  });
  
});

module.exports = router;