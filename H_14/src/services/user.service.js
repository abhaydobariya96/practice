const { User } = require("../models")

/**
 * @param {object} reqBody
 * @returns {promise<User>}
 */

const createUser = async (reqBody) => {
    return User.create(reqBody)
}

const listUser = async (reqBody) => {
    return User.find({ $or: [{ is_activ: true }] })
}

const deleteUser = async (id) => {
    return User.findByIdAndDelete(id)
}

const getUserById = async (userid) => {
    return User.findById(userid)
}

const updateDetails = async (id, updateBody) => {
    return User.findByIdAndUpdate(id, { $set: updateBody })
}


module.exports = {
    createUser,
    listUser,
    deleteUser,
    getUserById,
    updateDetails
}