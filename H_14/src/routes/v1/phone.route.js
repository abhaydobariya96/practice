const express = require("express")
const phoneValidation = require("../../validation/phone.validation")
const phoneController = require("../../controllers/phone.controller.js")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create phone
router.post(
    "/create-phone",
    validate(phoneValidation.createPhone),
    phoneController.createPhone
);

//list phone
router.get(
    "/list-phone",
    validate(phoneValidation.listPhone),
    phoneController.listPhone
);

//delete phone
router.delete(
    "/delete-phone/:Id",
    phoneController.deletePhone
);

//update phone
router.put(
    "/update-phone/:phoneId",
    phoneController.updatePhone
);
module.exports = router