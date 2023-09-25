const { Stationary} = require("../models");

/**
 * Create Stationary
 * @param {object} reqBody
 * @returns {Promise<Stationary>}
 */
const createStationary = async (reqBody) => {
  return Stationary.create(reqBody)
};

  const listStationary = async (reqBody) => {
    return Stationary.find(reqBody)
  };

  const deleteStationary = async (id) => {
    return Stationary.findByIdAndDelete(id)
  };

  const getStationaryById = async (id) => {
    return Stationary.findById(id)
  };
  const updateDetails = async (id,updateBody) => {
    return Stationary.findByIdAndUpdate(id,{$set : updateBody})
  };

module.exports = { createStationary,listStationary,deleteStationary,getStationaryById,updateDetails }