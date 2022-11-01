const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {

  try{

    await client.connect();

    console.log("Connected successfully to server");

  } catch (error) {

    console.log(error);

    await client.close();

  }
}

module.exports = {
  connect, 
  db: client.db('services')
};
