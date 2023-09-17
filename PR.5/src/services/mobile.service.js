const { Mobile } = require("../models")


/**
* Create mobile
* @param {object} reqBody
* @returns {Promise<Book>}
*/
const createMobile = async (reqBody) => {
    return Mobile.create(reqBody)
};

//list mobile
const listMobile = async (reqBody) => {
    return Mobile.find({ $or: [{ is_active: true }] })
};

//delete mobiel
const deleteMobile = async (id) => {
    return Mobile.findByIdAndDelete(id)
};

const getMobileById = async (mobileId) => {
    return Mobile.findById(mobileId)
}
const updateDetails = async (mobileId, updateBody) => {
    return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody })
}


module.exports = {
    createMobile,
    listMobile,
    deleteMobile,
    getMobileById,
    updateDetails
}