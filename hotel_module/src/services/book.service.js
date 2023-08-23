const { Book } = require("../models");

/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<Book>}
 */
const createBook = async (reqBody) => {
  return Book.create(reqBody)
};

const listBook = async (reqBody) => {
  return Book.find(reqBody)
};

const deleteBook = async (id) => {
  return Book.findByIdAndDelete(id)
};

module.exports = { createBook, listBook,deleteBook}