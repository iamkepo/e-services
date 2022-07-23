const { MongoClient, ObjectId } = require('mongodb');

const uri = `mongodb://localhost:27017`;
const clusterUrl = process.env.MONGODB_URL || uri;
const client = new MongoClient(clusterUrl, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

  try{

    await client.connect();

    console.log("Connected successfully to server");

  } catch (error) {

    console.log(error);

    await client.close();

  }
}

module.exports = {
  start : run,
  collection: {
    users: client.db('services').collection('users'),
    icons: client.db('services').collection('icons'),
  }
};