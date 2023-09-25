const { Tournament } = require("../models")

/**
 * @param {object} reqBody
 * @returns {Promise<Tournament>}
 */
const createTournament = async (reqBody) => {
    return Tournament.create(reqBody)
}

const listTournament = async (reqBody) => {
    return Tournament.find(reqBody).populate("player")
}
const deleteTournament = async (Id) => {
    return Tournament.findByIdAndDelete(Id)
}
const getTournamentById = async (TournamenthId) => {
    return Tournament.findById(TournamenthId)
}
const updateDetails = async (Id, updateBody) => {
    return Tournament.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createTournament,
    listTournament,
    deleteTournament,
    getTournamentById,
    updateDetails
}