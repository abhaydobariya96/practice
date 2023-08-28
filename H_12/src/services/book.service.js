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
  return Book.find({ $or: [{ is_active: true }] })
};

const deleteBook = async (id) => {
  return Book.findByIdAndDelete(id)
};

const getBookById = async (bookId) => {
  return Book.findById(bookId);
};

const updateDetails = async (bookId, updateBody) => {
  return Book.findByIdAndUpdate(bookId, { $set: updateBody })
}

module.exports = { createBook, listBook, deleteBook, getBookById,updateDetails }