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

// const deleteBook = async (id) => {
//   return Book.findByIdAndDelete(id)
// };

 module.exports = { createHotel,listHotel}