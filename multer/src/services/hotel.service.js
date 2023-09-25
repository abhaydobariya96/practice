const { Hotel } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody)
};

const listHotel = async (reqBody) => {
  return Hotel.find(reqBody)
};

const deleteHotel = async (id) => {
  return Hotel.findByIdAndDelete(id)
};

const getHotelByIb = async (hotelId) => {
  return Hotel.findById(hotelId)
};

const updateDetails = async (id, updateBody) => {
  return Hotel.findByIdAndUpdate(id, { $set: updateBody })
};

module.exports = {
  createHotel,
  listHotel,
  deleteHotel,
  getHotelByIb,
  updateDetails
}