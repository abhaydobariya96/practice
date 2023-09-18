const { Category } = require("../models");
/**
 * create Category
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */

const createCategory = async (reqBody) => {
    return Category.create(reqBody)
};

const listCategory = async (reqBody) => {
    return Category.find(reqBody)
};

const deleteCategory = async (id) => {
    return Category.findByIdAndDelete(id)
};
const getCategoryById = async (categoryid) => {
    return Category.findById(categoryid)
};

const updateDetails = async (id, updateBody) => {
    return Category.findByIdAndUpdate(id, { $set: updateBody })
};



module.exports = {
    createCategory,
    listCategory,
    deleteCategory,
    getCategoryById,
    updateDetails
}