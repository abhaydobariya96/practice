const { Result } = require("../models")

/**
 * @param {object} reqBody
 * @returns {Promise<Result>}
 */
const createResult = async (reqBody) => {
    return Result.create(reqBody)
}

const listResult = async (reqBody) => {
    return Result.find(reqBody)
}
const deleteResult = async (Id) => {
    return Result.findByIdAndDelete(Id)
}
const getResultById = async (coathId) => {
    return Result.findById(coathId)
}
const updateDetails = async (Id, updateBody) => {
    return Result.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createResult,
    listResult,
    deleteResult,
    getResultById,
    updateDetails
}