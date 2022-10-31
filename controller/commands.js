const { getList, getOne } = require("../model/getter");
const { postOne, postMany } = require("../model/postter");
const { putOne } = require("../model/putter");
const { grefAttributesCommand } = require("../helper/util");

const addCommand = (command, callback) => postOne("commands", command, (response) => callback(response._id));

const addCommands = async (commands, callback) => {
  await grefAttributesCommand(commands).then((tab)=>{
    postMany("commands", tab, (response) => callback(response))
  })
};

const updateCommand = (COMMANDE_ID, data, callback) => putOne("commands", {COMMANDE_ID: COMMANDE_ID}, data, () => callback());

const getCommand = (COMMANDE_ID, callback) => getOne("commands", {COMMANDE_ID: COMMANDE_ID}, {}, (response) => callback(response));

const getCommandsClient = (ID_USER, callback) => getList("commands", {"CLIENT.ID_USER": ID_USER}, {}, (err, result) => callback(err, result));
const getCommandsVoyant = (ID_USER, callback) => getList("commands", {"VOYANT.ID_USER": ID_USER}, {}, (err, result) => callback(err, result));


module.exports = { addCommand, addCommands, updateCommand, getCommand, getCommandsClient, getCommandsVoyant };