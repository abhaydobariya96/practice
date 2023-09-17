const express = require("express");

const productValidation = require("../../validation/product.validation");
const productController = require("../../controllers/product.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create product
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);

// list product
router.get(
    "/list-product",
    validate(productValidation.listProduct),
    productController.listProduct
);

//delete product
router.delete(
    "/delete-product/:Id",
    productController.deleteProduct
);

//update product
router.put(
    "/update-product/:productId",
    productController.updateProduct
);

module.exports = router