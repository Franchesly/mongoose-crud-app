const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGO_URI || "";

const client = new MongoClient(connectionString);

let conn;
let db;

async function connectToDatabase() {
  try {
    conn = await client.connect();
    db = conn.db("sample_training");
    console.log("Connected to database");
  } catch (e) {
    console.error("Failed to connect to MongoDB:", e);
  }
}



module.exports = connectToDatabase;