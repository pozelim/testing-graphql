/* src/database.js */

import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";
import { Users } from "./data";

let database = null;

const mongo = new MongoMemoryServer();

async function startDatabase() {
  const mongoDBURL = await mongo.getConnectionString();
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
  });

  //Seed Database
  if (!database) {
    database = connection.db();
    await database.collection("users").insertMany(Users);
  }

  return database;
}

async function stopDatabase() {
  await mongo.stop();
}

export {
  startDatabase,
  stopDatabase,
};