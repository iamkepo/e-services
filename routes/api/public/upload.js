var express = require('express');
var router = express.Router();
const fs = require('fs');
  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app
  
router.post('/', async (req, res) => {
  var objet = { 
    date: Date.now(),
    user_id: req.headers.user_id,
    type: req.headers.type,
  }; 
  //console.log(objet);
  objet.uri = "http://"+req.headers.host+"/files/"+objet.user_id+objet.date+(req.headers.type == 'image' ? ".png" : ".mp4");
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
  });
  const service = google.drive({version: 'v3', auth});
  const fileMetadata = {
    name: 'photo.jpg',
  };
  const media = {
    mimeType: 'image/jpeg',
    body: fs.createReadStream('files/photo.jpg'),
  };
  try {
    const file = await service.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id',
    });
    console.log('File Id:', file.data.id);
    return file.data.id;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
  req.pipe(fs.createWriteStream('./uploads\\'+objet.user_id+objet.date+(req.headers.type == "image" ? '.png' : '.mp4')));

  res.json(objet);
});

module.exports = router;