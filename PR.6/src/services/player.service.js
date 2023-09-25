const { Player } = require("../models")

/**
 * @param {object} reqBody
 * @returns {Promise<Player>}
 */
const createPlayer = async (reqBody) => {
    return Player.create(reqBody)
}

const listPlayer = async (reqBody) => {
    return Player.find(reqBody).populate("coach")
}
const deletePlayer = async (Id) => {
    return Player.findByIdAndDelete(Id)
}
const getPlayerById = async (playerId) => {
    return Player.findById(playerId)
}
const updateDetails = async (Id, updateBody) => {
    return Player.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createPlayer,
    listPlayer,
    deletePlayer,
    getPlayerById,
    updateDetails
}