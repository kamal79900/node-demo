const mongoose = require("mongoose");
const DB_URL = process.env.MONGOURL;

async function connectToDb() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDb;
