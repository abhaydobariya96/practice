const { Coach } = require("../models")

/**
 * @param {object} reqBody
 * @returns {Promise<Coach>}
 */
const createCoach = async (reqBody) => {
    return Coach.create(reqBody)
}

const listCoach = async (reqBody) => {
    return Coach.find(reqBody)
}
const deleteCoach = async (Id) => {
    return Coach.findByIdAndDelete(Id)
}
const getCoachById = async (coathId) => {
    return Coach.findById(coathId)
}
const updateDetails = async (Id, updateBody) => {
    return Coach.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createCoach,
    listCoach,
    deleteCoach,
    getCoachById,
    updateDetails
}