const { Bus } = require("../models");

/**
 * Create bus
 * @param {object} reqBody
 * @returns {Promise<Bus>}
 */
const createBus = async (reqBody) => {
  return Bus.create(reqBody)
};

const listBus = async (reqBody) => {
  return Bus.find({ $or: [{ is_active: true }] })
};

const deleteBus = async (id) => {
  return Bus.findByIdAndDelete(id)
};

const getBusById = async (busId) => {
  return Bus.findById(busId);
};

const updateDetails = async (busId, updateBody) => {
  return Bus.findByIdAndUpdate(busId, { $set: updateBody })
}

module.exports = {
  createBus,
  listBus,
  deleteBus,
  getBusById,
  updateDetails
}