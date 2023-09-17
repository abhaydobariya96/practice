const express = require("express")
const orderValidation = require("../../validation/order.validation")
const orderController = require("../../controllers/order.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create order
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
);

//list order
router.get(
    "/list-order",
    validate(orderValidation.listOrder),
    orderController.listOrder
);

//delete order
router.delete(
    "/delete-order/:Id",
    orderController.deleteOrder
);

//update order
router.put(
    "/update-order/:orderId",
    orderController.updateOrder
);
module.exports = router