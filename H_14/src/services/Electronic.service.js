const { Electronic } = require("../models")

/**
 * craete Electronic
 * @param {object} reqBody
 * @returns {Promise<Electronic>}
 */

const createElectronic = async (reqBody) => {
    return Electronic.cteate(reqBody)
};

//list Electronic
const listElectronic = async (reqBody) => {
    return Electronic.find({ $or: [{ is_activ: true }] })
};

//delete Electronic
const deleteElectronic = async (id) => {
    return Electronic.findByIdAndDelete(id)
};

//update Electronic
const getOrderById = async (electronicid) => {
    return Electronic.findById(electronicid)
};

const updateDetails = async (id, updateBody) => {
    return Electronic.findByIdAndUpdate(id, { $set: updateBody })
};

module.exports = {
    createElectronic,
    listElectronic,
    deleteElectronic,
    getOrderById,
    updateDetails
}