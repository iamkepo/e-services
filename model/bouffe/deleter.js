const { ObjectId } = require('mongodb');
var {dbBouffe} = require('../connect');

function deleteOne (collection, query, callback) {
  dbBouffe.collection(collection)
  .deleteOne(query)
  .then((response) => callback(response));
}
function deleteId (collection, id, callback) {
  dbBouffe.collection(collection)
  .deleteOne({_id: ObjectId(id)})
  .then((response) => callback(response));
}

module.exports = { deleteId, deleteOne };