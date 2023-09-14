const express = require("express")
const mobileValidation = require("../../validation/mobile.validation")
const mobileController = require("../../controllers/mobile.controller")
const validate = require("../../middlewares/validate");
const mobile = require("../../models/mobile.model");

const router = express.Router();


//create mobile
router.post(
    "/create-mobile",
    validate(mobileValidation.createMobile),
    mobileController.createMobile
);

// list mobile
router.get(
    "/list-mobile",
    validate(mobileValidation.listMobile),
    mobileController.listMobile
);

// delete mobile
router.delete(
    "/delete-mobile/:Id",
    mobileController.deleteMobile
)

// update mobile
router.put(
"/update-mobile/:mobileId",
mobileController.updateMobile
);

module.exports = router