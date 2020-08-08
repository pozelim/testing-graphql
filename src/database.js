/* src/database.js */

import { Users } from "./data";
import low from "lowdb"
import FileSync from "lowdb/adapters/FileSync"

async function startDatabase() {
  const adapter = new FileSync(".data/db.json");
  const db = low(adapter);

  // Set some defaults (required if your JSON file is empty)
  db.defaults({ users: [] })
    .write();

  // Add users
  db.set("users", Users)
    .write();

  return db;
}

async function stopDatabase() {
}

export {
  startDatabase,
  stopDatabase,
};