const { Gallery } = require("../models")

/**
 * @param {object} reqBody
 * @returns {Promise<Gallery>}
 */
const createGallery = async (reqBody) => {
    return Gallery.create(reqBody)
}

const listGallery = async (reqBody) => {
    return Gallery.find(reqBody)
}
const deleteGallery = async (Id) => {
    return Gallery.findByIdAndDelete(Id)
}
const getGalleryById = async (galleryId) => {
    return Gallery.findById(galleryId)
}
const updateDetails = async (Id, updateBody) => {
    return Gallery.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createGallery,
    listGallery,
    deleteGallery,
    getGalleryById,
    updateDetails
}