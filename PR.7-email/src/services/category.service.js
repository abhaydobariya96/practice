const { Category } = require("../models")



/**
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */

const createCategory = async (reqBody) => {
    return Category.create(reqBody)
}

const getCategoryByEmail = async (email) => {
    return Category.findOne({email});
}
const listCategory = async (reqBody) => {
    return Category.find({ $or: [{is_active : "true"}] })
}
const deleteCategory = async (id) => {
    return Category.findByIdAndDelete(id)
}
const getCategoryById = async (categoryid) => {
    return Category.findById(categoryid)
}
const updateDetail = async (id, updateBody) => {
    return Category.findByIdAndUpdate(id, { $set: updateBody })
}

module.exports = {
    createCategory,
    listCategory,
    deleteCategory,
    getCategoryById,
    updateDetail,
    getCategoryByEmail
}