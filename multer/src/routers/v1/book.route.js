const express = require("express")
const  bookValidation = require("../../validation/book.validation");
const  bookController = require("../../controller/book.controller");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

// create book
router.post(
  "/create-book",
    upload.single("image"),
  validate(bookValidation.createBook),
  bookController.createBook
);

// list book
router.get(
  "/list-book",
  validate(bookValidation.listBook),
  bookController.listBook
);

// delete book
router.delete(
  "/delete-book/:Id",
  bookController.deleteBook
);

// update book
router.put(
  "/update-book/:bookId",
  upload.single("image"),
  bookController.updateBook
);
module.exports = router;