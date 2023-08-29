const { Jewellery } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Jewellery>}
 */
const createJewellery = async (reqBody) => {
  return Jewellery.create(reqBody)
};

const listJewellery = async (reqBody) => {
  return Jewellery.find({ $or: [{ is_active: true }] })
};

const deleteJewellery = async (id) => {
  return Jewellery.findByIdAndDelete(id)
};

const getJewelleryById = async (jewelleryId) => {
  return Jewellery.findById(jewelleryId)
};

const updateDetails = async (jewelleryId, updateBody) => {
  return Jewellery.findByIdAndUpdate(jewelleryId,{$set:updateBody});
};

module.exports = {
  createJewellery,
  listJewellery,
  deleteJewellery,
  getJewelleryById,
  updateDetails
}
