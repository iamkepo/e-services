const { deleteOne } = require("../../model/bouffe/deleter");
const { getList, getOne, getLast } = require("../../model/bouffe/getter");
const { postOne } = require("../../model/bouffe/postter");
const { putOne } = require("../../model/bouffe/putter");

const addVersion = (version, callback) => postOne("version", version, (response) => callback(response));

const updateVersion = (code, data, callback) => putOne("version", {code: code}, data, (response) => callback(response));

const deleteVersion = (code, callback) => deleteOne("version", {code: code}, (response) => callback(response));

const getVersion = (code, callback) => getOne("version", {code: code}, {}, (response) => callback(response));

const getVersions = (callback) => getList("version", {}, {}, (err, result)=> callback(err, result));

const getLastVersion = (callback) => getLast("version", (err, result) => callback(err, result));

module.exports = { addVersion, updateVersion, deleteVersion, getVersion, getVersions, getLastVersion}