const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 15,
      required: true,
    },
    mint: {
      type: String,
      trim: true,
      minLength: 3,
      maxLength: 15,
    },
    lname: {
      type: String,
      trim: true,
      maxLength: 15,
      minLength: 3,
      required: true,
    },
  },
  { _id: false }
);

const addressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const employeeSchema = new mongoose.Schema({
  name: nameSchema,
  ssn: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 5,
    trim: true,
  },
  bdate: Date,
  address: addressSchema,
  gender: {
    type: String,
    enum: ["Male", "Female"],
    trim: true,
  },
  salary: {
    type: Number,
    min: 2000,
    max: 6000,
    default: 2500,
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
