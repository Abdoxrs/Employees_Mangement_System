const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/users.model");
const { ApiError } = require("../Utills/ApiError");

const createUser = (data) => Users.create(data);

const loginUser = async (data) => {
  const userDoc = await User.findOne({ email: data.email }).select(
    "password email role createdAt updatedAt"
  );
  if (!userDoc) {
    throw new ApiError("email or password is worng, please try again!!", 400);
  }

  const hashedSaltedPassword = userDoc.password;
  const password = data.password;
  const isTheOne = await bcrypt.compare(password, hashedSaltedPassword);
  if (!isTheOne) {
    throw new ApiError("email or password is worng, please try again!!", 400);
  }
  return jwt.sign(
    { id: userDoc._id, role: userDoc.role },
    "this-is-my-very-long-secret"
  );
};

const getUserById = (id) => User.findById(id);

module.exports = {
  createUser,
  loginUser,
  getUserById,
};
