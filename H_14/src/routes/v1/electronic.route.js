const express = require("express")
const electronicValidation = require("../../validation/electronic.validation");
const electronicController = require("../../controllers/electronic.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

//create electronic
router.post(
    "/create-electronic",
    validate(electronicValidation.createElectronic),
    electronicController.createElectronic
);

//list electronic
router.get(
    "/list-electronic",
    validate(electronicValidation.listElectronic),
    electronicController.listElectronic
);

//delete electronic
router.delete(
    "/delete-electronic/:Id",
    electronicController.deleteElectronic
);

//update electronic
router.put(
    "/update-electronic/:electronicId",
    electronicController.updateElectronic
);



module.exports = router