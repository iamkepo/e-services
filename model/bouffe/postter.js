var {dbBouffe} = require('../connect');

function postMany (collection, data, callback) {
  dbBouffe.collection(collection)
  .insertMany(data)
  .then((response) => callback(response));
}

function postOne (collection, data, callback) {
  dbBouffe.collection(collection)
  .insertOne(data)
  .then((response) => callback(response));
}

module.exports = { postMany, postOne };