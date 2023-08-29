const express = require("express")
const stationaryValidation = require ("../../validations/stationary.validation")
const stationaryController = require ("../../controllers/stationary.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create stationary
router.post(
"/create-stationary/",
validate(stationaryValidation.createStationary),
stationaryController.createStationary
);

//list stationary
router.get(
"/list-stationary/",
validate(stationaryValidation.listStationary),
stationaryController.listStationary
);

//delete stationary
router.delete(
"/delete-stationary/:Id",
stationaryController.deleteStationary
);

//update stationary
router.put(
"/update-stationary/:Id",
stationaryController.updateStationary
);


module.exports =router;