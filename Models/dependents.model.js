const mongoose = require('mongoose');

const dependentSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  sex: {
    type: String,
    enum: ['Male', 'Female'],
  },
  birthDate: {
    type: Date,
  },
  relationship: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Dependent', dependentSchema);
