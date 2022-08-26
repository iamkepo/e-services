const { MongoClient } = require('mongodb');

const uri = `mongodb://localhost:27017`;
const clusterUrl = process.env.MONGODB_URL || uri;
const client = new MongoClient(clusterUrl, { useNewUrlParser: true, useUnifiedTopology: true });

async function start() {

  try{

    await client.connect();

    console.log("Connected successfully to server");

  } catch (error) {

    console.log(error);

    await client.close();

  }
}

module.exports = {
  start, db: client.db('services')
};