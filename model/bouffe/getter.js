const { ObjectId } = require('mongodb');
var {dbBouffe} = require('../connect');

function getList (collection, find, project, callback) {
  dbBouffe.collection(collection)
  .find(find)
  .project(project)
  .toArray( (err, result) => callback(err, result) );
}

function getOne (collection, find, project, callback) {
  dbBouffe.collection(collection)
  .findOne(find, { projection: project })
  .then((response) => callback(response));
}

function getId (collection, id, project, callback) {
  dbBouffe.collection(collection)
  .findOne({_id: ObjectId(id)}, { projection: project })
  .then((response) => callback(response));
}
function getListByEnd (collection, find, limit, project, callback) {
  dbBouffe.collection(collection)
  .find(find)
  .aggregate({ $sort : { headline : -1 } , $limit : limit })
  .project(project)
  .toArray( (err, result) => callback(err, result) );
}
function getLast (collection, callback) {
  dbBouffe.collection(collection)
  .aggregate([{ $sort : { date : -1 }} , {$limit : 1 }])
  .toArray((err, result) => callback(err, result));
}
module.exports = { getList, getOne, getId, getListByEnd, getLast };