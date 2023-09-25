const { Contact } = require("../models")


/**
 * @param {object} reqBody
 * @returns {Promise<Contact>}
 */
const createContact = async (reqBody) => {
    return Contact.create(reqBody)
}

const listContact = async () => {
    return Contact.find()
}
const deleteContact = async (Id) => {
    return Contact.findByIdAndDelete(Id)
}
const getContactById = async (conatactId) => {
    return Contact.findById(conatactId)
}
const updateDetails = async (Id, updateBody) => {
    return Contact.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createContact,
    listContact,
    deleteContact,
    getContactById,
    updateDetails
}