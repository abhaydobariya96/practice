const { Category } = require("../models/category.model");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

module.exports = { createCategory }