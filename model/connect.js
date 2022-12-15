const { MongoClient } = require('mongodb');

require('dotenv').config();

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const uriBouffe = process.env.MONGODB_URL_BOUFFE;
const clientBouffe = new MongoClient(uriBouffe, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {

  try{

    await client.connect();
    console.log("Connected successfully to services");
    await clientBouffe.connect();
    console.log("Connected successfully to bouffe");

  } catch (error) {

    console.log(error);

    await client.close();

  }
}

module.exports = {
  connect, 
  connect, 
  db: client.db('services'),
  dbBouffe: clientBouffe.db('bouffe')
};
