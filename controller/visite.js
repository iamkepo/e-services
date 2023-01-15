const ControllerDB = require("./controllerBD");

const visite = new ControllerDB('visite', 'domainName')

module.exports = { 
  addVisite: visite.add,
  updateVisite: visite.update,
  deleteVisite: visite.delete,
  getVisite: visite.get,
  getsVisite: visite.gets,
};