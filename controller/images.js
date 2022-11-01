const { getList } = require("../model/getter");
const { postOne, postMany } = require("../model/postter");
const { putOne, putMany } = require("../model/putter");

const addImage = (query, callback) => postOne("images", query, (response) => callback(response));

const addImages = (images, callback) => postMany("images", images, (response) => callback(response));

const updateImages = (query, data, callback) => putMany("images", {query: query}, data, (response) => callback(response));

const getImagesByQuery = (query, callback) => getList("images", {query: query}, { _id: 0 }, (err, result) => callback(err, result));

const getImages = (callback) => getList("images", {}, {}, (err, result) => callback(err, result));

function trieOneImage(index, result) {
  if (parseInt((0+index)) < 0) {
    return result[0];
  } else if (parseInt((0+index)) > result.length-1) {
    return result[result.length-1];
  } else {
    return result[parseInt((0+index))];
  }
}

function trieOneImages(limit, result) {
  if (parseInt((0+limit)) < 0) {
    return result[0];
  } else if (parseInt((0+limit)) > result.length-1) {
    return result;
  } else {
    return result.filter((el, i) => i < parseInt((0+limit)) );
  }
}

module.exports = { addImage, addImages, updateImages, getImagesByQuery, getImages, trieOneImage, trieOneImages };