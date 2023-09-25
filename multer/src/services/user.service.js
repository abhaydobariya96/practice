const User = require("../models/user.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

const getUserList = async (reqBody) => {
  return User.find(reqBody);
};
const deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};
const updateDetails = async (id,updateBody) => {
  return User.findByIdAndUpdate(id,{$set : updateBody});
};
module.exports = {
  createUser,
  getUserList,
  deleteUser,
  updateDetails
};