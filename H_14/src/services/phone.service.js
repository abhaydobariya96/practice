const { Phone } = require("../models");

/**
 * create Phone
 * @param {object} reqBody
 * @return {promise<Phone>}
 */

const createPhone = async (reqBody) => {
    return Phone.create(reqBody)
};

// list Phone
const listPhone = async (reqBody) => {
    return Phone.find({ $or: [{ is_active: true }] })
};

// delete Phone
const deletePhone = async (id) => {
    return Phone.findByIdAndDelete(id)
};

//update Phone
const getPhoneById = async (phoneId) => {
    return Phone.findById(phoneId)
};

const updateDetails = async (id, updateBody) => {
    return Phone.findByIdAndUpdate(id, { $set: updateBody })
};



module.exports = {
    createPhone,
    listPhone,
    deletePhone,
    getPhoneById,
    updateDetails

}

