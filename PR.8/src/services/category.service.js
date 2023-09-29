const { Category } = require("../models")

/**
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
    return Category.create(reqBody)
}

const listCategory = async (reqBody) => {
    return Category.find(reqBody)
}
const deleteCategory = async (Id) => {
    return Category.findByIdAndDelete(Id)
}
const getCategoryById = async (categoryId) => {
    return Category.findById(categoryId)
}
const updateDetails = async (Id, updateBody) => {
    return Category.findByIdAndUpdate(Id, { $set: updateBody })
}


module.exports = {
    createCategory,
    listCategory,
    deleteCategory,
    getCategoryById,
    updateDetails
}