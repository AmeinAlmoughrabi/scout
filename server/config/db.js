const mongoose = require("mongoose");
const colors = require("colors");
const config = require("../config.json");

async function connectDB() {
  try {
    const conn = await mongoose.connect(config.mongo_url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.blue.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    //console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;
