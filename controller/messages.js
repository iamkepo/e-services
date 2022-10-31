const { getList, getOne } = require("../model/getter");
const { postOne } = require("../model/postter");
const { putOne, putMany } = require("../model/putter");
const { updateCommand } = require("./commands");

require('dotenv').config();

const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const addMessage = (message, callback) => {
  message.date = new Date();
  postOne("messages", message, (response) => {
    updateCommand(message.room, {lastmessage: message}, ()=>callback(response))
  })
};

const updateMessage = (query, data, callback) => putOne("messages", query, data, () => callback());

const updateMessages = (query, data, callback) => putMany("messages", query, data, () => callback());

const getMessage = (query, callback) => getOne("messages", query, {}, (response) => callback(response));

const getMessagesRoom = (COMMANDE_ID, callback) => getList("messages", {room: COMMANDE_ID}, {}, (err, result) => callback(err, result));

const getLastMessageRoom = (COMMANDE_ID) => getMessagesRoom(COMMANDE_ID, (err, result) => result[stock.length-1]);

const uploadFile = (params, callback) => {
  params.Bucket = process.env.ELECTIONBJ_AWS_IMAGES_BUCKET_NAME
  s3.upload(params, (s3Err, data) =>callback(s3Err, data) );
};
const setVue = (COMMANDE_ID, callback)=>{
  updateMessages({room: COMMANDE_ID, vu: false}, {vu: true}, callback)
}
module.exports = {uploadFile, addMessage, updateMessage, getMessage, getMessagesRoom, getLastMessageRoom, setVue};