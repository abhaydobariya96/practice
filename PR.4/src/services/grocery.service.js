const { Grocery } = require("../models");

/**
 * Create Grocery
 * @param {object} reqBody
 * @returns {Promise<Grocery>}
 */
const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody)
};

const listGrocery = async (reqBody) => {
  return Grocery.find({ $or: [{ is_active: true }] })
};

const deleteGrocery = async (id) => {
  return Grocery.findByIdAndDelete(id)
};

const getGroceryById = async (groceryId) => {
  return Grocery.findById(groceryId);
}
const updateDetails = async (groceryId, updateBody) => {
  return Grocery.findByIdAndUpdate(groceryId, { $set: updateBody });
}
module.exports = {
  createGrocery,
  listGrocery,
  deleteGrocery,
  getGroceryById,
  updateDetails
}