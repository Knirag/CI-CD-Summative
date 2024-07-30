const User = require("../models/User");

const register = async (userData) => {
  const user = await User.create(userData);
  return user;
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

module.exports = { register, findUserByEmail };
