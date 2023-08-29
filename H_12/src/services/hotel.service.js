const Hotel = require("../models/hotel.model");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody)
};

const listHotel = async (reqBody) => {
  return Hotel.find({ $or: [{ is_active: true }] })
};

const deleteHotel = async (id) => {
  return Hotel.findByIdAndDelete(id)
};

const getHotelById = async (hotelId) => {
  return Hotel.findById(hotelId)
};

const updateDetails = async (hotelId, updateBody) => {
  return Hotel.findByIdAndUpdate(hotelId, { $set: updateBody });
}

module.exports = {
  createHotel,
  listHotel,
  deleteHotel,
  getHotelById,
  updateDetails
}