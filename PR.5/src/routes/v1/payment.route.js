const express = require("express");
const validate = require("../../middlewares/validate")
const { paymentValidation } = require("../../validation")
const paymentContrioller = require("../../controllers/payment.controller")

const router = express.Router();

//create payment
router.post(
    "/create-payment",
    validate(paymentValidation.createPayment),
    paymentContrioller.createPayment
);

//list payment
router.get(
    "/list-payment",
    validate(paymentValidation.listPayment),
    paymentContrioller.listPayment
);

//delete payment
router.delete(
    "/delete-payment/:Id",
    paymentContrioller.deletePayment
);

//update payment
router.put(
    "/update-payment/:paymentId",
    paymentContrioller.updatePayment
);

module.exports = router