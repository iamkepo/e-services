const { getOne, getList } = require("../model/getter");
const { postOne } = require("../model/postter");
const { putOne } = require("../model/putter");
const { deleteOne } = require("../model/deleter");

class ControllerDB {
  constructor (collectionName, collectionSelector){
    this.collectionName = collectionName;
    this.collectionSelector = collectionSelector;
  }

  add = (data, callback) => postOne(this.collectionName, data, (response) => callback(response));
  
  update = (query, data, callback) => putOne(this.collectionName, {[this.collectionSelector]: query}, data, (response) => callback(response));
  
  delete = (callback) => deleteOne(this.collectionName, this.collectionSelector, (response) => callback(response));
  
  get = (query, callback) => getOne(this.collectionName, {[this.collectionSelector]: query}, {}, (response)=> callback(response));
  
  gets = (callback) => getList(this.collectionName, this.collectionSelector, {}, (err, result)=> callback(err, result));

}

module.exports = ControllerDB;