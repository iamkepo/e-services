const { getOne, getList } = require("../../model/bouffe/getter");
const { postOne } = require("../../model/bouffe/postter");
const { putOne } = require("../../model/bouffe/putter");

async function insertPlat(params) {
  await connect.collection.plats.insertOne(params).then(()=>{
    listPlat();
  });
}
async function updatePlat(params) {
  var objet = {
    "etat": params.etat,
    "ide": params.ide,
    "name": params.name,
    "photo": params.photo,
    "prix": params.prix,
    "restaurant":params.restaurant
  }
  var find = { "ide": objet.ide };
  await connect.collection.plats.updateOne(
    find,
    {$set: objet}
  ).then(()=>{
    listPlat();
  });
}
async function deletePlat(params) {
  var find = { "ide": params.ide };
  fs.unlink(params.photo, (err) => {
    if (err) {
      console.error(err)
    }
  });
  await connect.collection.plats.deleteOne(find).then(()=>{
    listPlat();
  });
}
async function listPlat() {
  var cursor = await connect.collection.plats.find({});
  list_plat = [];
  for await (const d of cursor) {
    list_plat = list_plat.concat(d)
  }
}
module.exports = { }