const { Pharmacy } = require("../models");

/**
 * Create pharmacy
 * @param {object} reqBody
 * @returns {Promise<Pharmacy>}
 */

const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody)
};

const listPharmacy = async (reqBody) => {
  return Pharmacy.find({ $or: [{ is_active: true }] })
};

const deletePharmacy = async (id) => {
  return Pharmacy.findByIdAndDelete(id)
};

const getPharmacyById = async (pharmacyid) => {
  return Pharmacy.findByIdAndUpdate (pharmacyid)
};

const updateDetails = async (pharmacyid, reqBody) => {
  return Pharmacy.findByIdAndUpdate (pharmacyid,{$set:reqBody})
};

module.exports = {
  createPharmacy,
  listPharmacy,
  deletePharmacy,
  getPharmacyById,
  updateDetails
}