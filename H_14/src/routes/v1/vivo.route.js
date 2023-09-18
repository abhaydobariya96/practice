const express = require("express")
const vivoValidation = require("../../validation/vivo.validation")
const vivoController = require("../../controllers/vivo.controller.js")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create vivo
router.post(
    "/create-vivo",
    validate(vivoValidation.createVivo),
    vivoController.createVivo
);

//list vivo
router.get(
    "/list-vivo",
    validate(vivoValidation.listVivo),
    vivoController.listVivo
);

//delete vivo
router.delete(
    "/delete-vivo/:Id",
    vivoController.deleteVivo
);

//update vivo
router.put(
    "/update-vivo/:vivoId",
    vivoController.updateVivo
);
module.exports = router