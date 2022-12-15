const { getOne, getList } = require("../model/bouffe/getter");
const { postOne } = require("../model/bouffe/postter");
const { putOne } = require("../model/bouffe/putter");
const { deleteOne } = require("../model/bouffe/deleter");

class ControllerDB {
  constructor (collectionName, collectionSelector){
    this.collectionName = collectionName;
    this.collectionSelector = collectionSelector;
  }

  add = (data, callback) => postOne(this.collectionName, data, (response) => callback(response));
  
  update = (data, callback) => putOne(this.collectionName, this.collectionSelector, data, (response) => callback(response));
  
  delete = (callback) => deleteOne(this.collectionName, this.collectionSelector, (response) => callback(response));
  
  get = (callback) => getOne(this.collectionName, this.collectionSelector, {}, (response)=> callback(response));
  
  gets = (query, callback) => getList(this.collectionName, query, {}, (err, result)=> callback(err, result));

}

module.exports = ControllerDB;