const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = "mongodb://127.0.0.1:27017/GO";
  return mongoose.connect(uri);
};

module.exports = { connectDB };
