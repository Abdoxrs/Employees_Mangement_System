const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      select: false,
    },
    passwordConfirmation: {
      type: String,
      trim: true,
      validate: function (value) {
        return this.password === value;
      },
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.passwordConfirmation = undefined;
    this.password = await bcrypt.hash(this.password, 10);
  }
});


module.exports = mongoose.model("User", userSchema);
