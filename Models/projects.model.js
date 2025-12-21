const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
  location: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Project', projectSchema);
