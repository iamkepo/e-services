const { MongoClient, ObjectId } = require('mongodb');

const uri = `mongodb://localhost:27017`;
const clusterUrl = process.env.MONGODB_URL || uri;
const client = new MongoClient(clusterUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const config = {
  width: 1450,
  height: 700,
  colonnes: 200,
  lignes: 100,
};

async function run() {

  try{

    await client.connect();

    console.log("Connected successfully to server");

  } catch (error) {

    console.log(error);

    await client.close();

  }
}

//cellules
async function insertCellules() {
  var index = 0;
  for (let i = 0; i < config.lignes; i++) {
    for (let j = 0; j < config.colonnes; j++) {
      var cellule = { 
        index : index,
        color:"rgb(0,0,0)",
      };
      await client.db('truf').collection('cellules').insertOne(cellule);
      cellule.date = new Date().getTime();
      insertHistory(cellule)
      console.log(index);
      index = index+1;
    }
  }
}
async function updateCellule(param) {
  await client.db('truf').collection('cellules').updateOne(
    {_id: ObjectId(param._id)},
    { $set: { color: param.color } }
  ).then(()=>{
    for (const key in param) {
      if (key == "_id") {
        param["date"] = new Date().getTime();
      }
    }
    insertHistory(param)
  });
}

//colors
async function insertColors() {
  var tab = [];
  for (let i = 25; i <30; i++) {
    for (let j = 0; j < 256; j++) {
      for (let k = 0; k < 256; k++) {
        var objet = {
          etat: false,
          value: 1,
          color: "rgb("+i+","+j+","+k+")",
        };
        tab = tab.concat(objet)
        console.log(objet.color);
      }
    }
  }
  await client.db('truf').collection('colors').insertMany(tab).then((response)=>{
    console.log(response);
  });
}
async function updateColor(param) {
  await client.db('truf').collection('testColors')
  .updateOne(
    {_id: ObjectId(param)},
    { $set: { etat: true } }
  )
}

//history
async function insertHistory(param) {
  await client.db('truf').collection('history')
  .updateOne(
    {_id: ObjectId(process.env.TABLE || "62718d63f25cf6cd5bfac3b0")},
    { $push: { table: param } }
  )
}

//test color
async function testColors() {
  var tab = [];
  for (let i = 150; i <200; i++) {
    for (let j = 150; j < 200; j++) {
      for (let k = 150; k < 200; k++) {
        var objet = {
          etat: false,
          value: 1,
          color: "rgb("+i+","+j+","+k+")",
        };
        tab = tab.concat(objet)
        console.log(objet.color);
      }
    }
  }
  await client.db('truf').collection('testColors').insertMany(tab).then((response)=>{
    console.log(response);
  });
}

module.exports = {
  start : run,
  insertCellules: insertCellules,
  insertColors: insertColors,
  updateCellule: updateCellule,
  testColors: testColors,
  updateColor: updateColor,
  config: config,
  collection: {
    users: client.db('truf').collection('users'),
    cellules : client.db('truf').collection('cellules'),
    colors : client.db('truf').collection('colors'),
    history : client.db('truf').collection('history'),
    testColors : client.db('truf').collection('testColors')
  }
};