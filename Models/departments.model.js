const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  locations: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Department", departmentSchema);
