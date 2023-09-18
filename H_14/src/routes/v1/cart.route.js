const express = require("express")
const cartValidation = require("../../validation/cart.validation");
const cartController = require("../../controllers/cart.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

//create cart
router.post(
    "/create-cart",
    validate(cartValidation.createCart),
    cartController.createCart
);

//list cart
router.get(
    "/list-cart",
    validate(cartValidation.listCart),
    cartController.listCart
);

//delete cart
router.delete(
    "/delete-cart/:Id",
    cartController.deleteCart
);

//update cart
router.put(
    "/update-cart/:cartId",
    cartController.updateCart
);



module.exports = router