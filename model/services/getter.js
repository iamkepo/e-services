const { ObjectId } = require('mongodb');
var connect = require('../connect');

function getList (collection, find, project, callback) {
  connect.db.collection(collection)
  .find(find)
  .project(project)
  .toArray( (err, result) => callback(err, result) );
}

function getOne (collection, find, project, callback) {
  connect.db.collection(collection)
  .findOne(find, { projection: project })
  .then((response) => callback(response));
}

function getId (collection, id, project, callback) {
  connect.db.collection(collection)
  .findOne({_id: ObjectId(id)}, { projection: project })
  .then((response) => callback(response));
}


module.exports = { getList, getOne, getId };