const { ObjectId } = require('mongodb');
var connect = require('../connect');

function putOne (collection, query, set, callback) {
  connect.db.collection(collection)
  .updateOne(query,
  { $set: set })
  .then((response) => callback(response));
}
function putMany (collection, query, set, callback) {
  connect.db.collection(collection)
  .updateMany(query,
  { $set: set })
  .then((response) => callback(response));
}
function putId (collection, id, set, callback) {
  connect.db.collection(collection)
  .updateOne({_id: ObjectId(id)},
  { $set: set })
  .then((response) => callback(response));
}

module.exports = { putId, putOne, putMany };