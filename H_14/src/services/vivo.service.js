const { Vivo } = require("../models");

/**
 * create Vivo
 * @param {object} reqBody
 * @return {promise<Vivo>}
 */

const createVivo = async (reqBody) => {
    return Vivo.create(reqBody)
};

// list Vivo
const listVivo = async (reqBody) => {
    return Vivo.find({ $or: [{ is_active: true }] })
};

// delete Vivo
const deleteVivo = async (id) => {
    return Vivo.findByIdAndDelete(id)
};

//update Vivo
const getVivoById = async (vivoId) => {
    return Vivo.findById(vivoId)
};

const updateDetails = async (id, updateBody) => {
    return Vivo.findByIdAndUpdate(id, { $set: updateBody })
};



module.exports = {
    createVivo,
    listVivo,
    deleteVivo,
    getVivoById,
    updateDetails
}

