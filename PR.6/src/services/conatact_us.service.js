const { Contact_us } = require("../models")


/**
 * @param {object} reqBody
 * @returns {Promise<Contact_us>}
 */
const createConatact = async (reqBody) => {
    return Contact_us.create(reqBody)
}

const listConatact = async (reqBody) => {
    return Contact_us.find(reqBody)
}
const deleteConatact = async (Id) => {
    return Contact_us.findByIdAndDelete(Id)
}
const getConatactById = async (contactId) => {
    return Contact_us.findById(contactId)
}
const updateDetails = async (Id, updateBody) => {
    return Contact_us.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createConatact,
    listConatact,
    deleteConatact,
    getConatactById,
    updateDetails
}