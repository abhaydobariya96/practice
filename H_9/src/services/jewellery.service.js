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
    return Jewellery.find(reqBody)
  };

  const deleteJewellery = async (id) => {
    return Jewellery.findByIdAndDelete(id)
  };

   module.exports = { createJewellery,listJewellery,deleteJewellery}