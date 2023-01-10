var connect = require('./connect');

function postMany (collection, data, callback) {
  connect.db.collection(collection)
  .insertMany(data)
  .then((response) => callback(response));
}

function postOne (collection, data, callback) {
  connect.db.collection(collection)
  .insertOne(data)
  .then((response) => callback(response));
}

module.exports = { postMany, postOne };