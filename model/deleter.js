const { ObjectId } = require('mongodb');
var connect = require('./connect');

function deleteOne (collection, query, set, callback) {
  connect.db.collection(collection)
  .deleteOne(query,
  { $set: set })
  .then((response) => callback(response));
}
function deleteId (collection, id, set, callback) {
  connect.db.collection(collection)
  .deleteOne({_id: ObjectId(id)},
  { $set: set })
  .then((response) => callback(response));
}

module.exports = { deleteId, deleteOne };