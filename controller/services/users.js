const { getOne, getList } = require("../../model/services/getter");
const { postOne } = require("../../model/services/postter");
const { putOne } = require("../../model/services/putter");

const addUser = (user, callback) => postOne("users", user, (response) => callback(response));

const updateUser = (ID_USER, data, callback) => putOne("users", {ID_USER: ID_USER}, data, () => callback());

const getUserId = (ID_USER, callback) => getOne("users", {ID_USER: ID_USER}, {}, (response)=> callback(response));
const getUserSid = (sid, callback) => getOne("users", {sid: sid}, {}, (response)=> callback(response));

const getUsers = (query, callback) => getList("users", query, {}, (err, result)=> callback(err, result));


const disconnectUser = (sid, callback) => {
  getUserSid(sid, (response)=> {
    if (response != null) {
      updateUser(response.ID_USER, {sid: false, isTyping: false}, ()=> callback(response));
    }
  });
};

const checkUser = (me, callback) => {
  const user = me;
  updateUser(user.ID_USER, {sid: user.sid, isTyping: false}, ()=>{
    getUsers({}, (err, result)=>callback(user, result))
  });
}
module.exports = { addUser, disconnectUser, getUserId, updateUser, checkUser, getUsers, getUserSid };