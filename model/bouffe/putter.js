const { ObjectId } = require('mongodb');
var {dbBouffe} = require('../connect');

function putOne (collection, query, set, callback) {
  dbBouffe.collection(collection)
  .updateOne(query,
  { $set: set })
  .then((response) => callback(response));
}
function putMany (collection, query, set, callback) {
  dbBouffe.collection(collection)
  .updateMany(query,
  { $set: set })
  .then((response) => callback(response));
}
function putId (collection, id, set, callback) {
  dbBouffe.collection(collection)
  .updateOne({_id: ObjectId(id)},
  { $set: set })
  .then((response) => callback(response));
}

module.exports = { putId, putOne, putMany };