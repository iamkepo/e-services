const { getOne, getList } = require("../../model/bouffe/getter");
const { postOne } = require("../../model/bouffe/postter");
const { putOne } = require("../../model/bouffe/putter");
const { deleteOne } = require("../../model/bouffe/deleter");
const ControllerBD = require("../controllerBD");

const users = new ControllerBD("users", {number: number});

const addUser = (user, callback) => postOne("users", user, (response) => callback(response));

const updateUser = (number, data, callback) => putOne("users", {number: number}, data, (response) => callback(response));

const deleteUser = (number, callback) => deleteOne("users", {number: number}, (response) => callback(response));

const getUser = (number, callback) => getOne("users", {number: number}, {}, (response)=> callback(response));

const getUserSid = (sid, callback) => getOne("users", {sid: sid}, {}, (response)=> callback(response));

const getUsers = (query, callback) => getList("users", query, {}, (err, result)=> callback(err, result));

const follow = (number, data, callback) => {
  putOne("users", {number: number}, data, (response) => callback(response)); 
  putOne("users", {number: data.number}, data, (response) => callback(response));
  // connect.collection.users
  // .updateOne(
  //   {_id: ObjectId(objet.him)},
  //   { $push: { follower: objet.me } }
  // )
  // connect.collection.users
  // .updateOne(
  //   {_id: ObjectId(objet.me)},
  //   { $push: { following: objet.him } }
  // ).then((response)=>{
  //   res.json(response);
  // });
}

const unfollow = (number, data, callback) => {  
  // connect.collection.users
  // .updateOne(
  //   {_id: ObjectId(objet.him), follower: objet.me },
  //   { $set: { "follower.$": null } }
  // )
  // connect.collection.users
  // .updateOne(
  //   {_id: ObjectId(objet.me), following: objet.him },
  //   { $set: { "following.$": null } }
  // ).then((response)=>{
  //   res.json(response);
  // });
  putOne("users", {number: number}, data, (response) => callback(response));
  putOne("users", {number: data.number}, data, (response) => callback(response));
}
 
const referance = (number, data, callback) => {  
  // connect.collection.users
  // .updateOne(
  //   {_id: ObjectId(objet.him), follower: objet.me },
  //   { $set: { "follower.$": null } }
  // )
  // connect.collection.users
  // .updateOne(
  //   {_id: ObjectId(objet.me), following: objet.him },
  //   { $set: { "following.$": null } }
  // ).then((response)=>{
  //   res.json(response);
  // });
  putOne("users", {number: number}, data, (response) => callback(response));
  putOne("users", {number: data.number}, data, (response) => callback(response));
}

const disconnectUser = (sid, callback) => {
  getUserSid(sid, (response)=> {
    if (response != null) {
      updateUser(response.number, {sid: false}, ()=> callback(response));
    }
  });
};

const checkUser = (me, callback) => {
  const user = me;
  updateUser(user.ID_USER, {sid: user.sid}, ()=>getUsers({}, (err, result)=>callback(user, result)));
}

module.exports = { 
  addUser, 
  getUser, 
  updateUser, 
  deleteUser, 
  getUsers, 
};