require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
  return mongoose.connect(process.env.DB_URL);
};

module.exports = dbConnect;
