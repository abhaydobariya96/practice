const express = require("express")
const stationaryValidation = require ("../../validation/stationary.validation")
const stationaryController = require ("../../controller/stationary.controller")
const validate = require("../../middlewares/validate")
const {upload} = require("../../middlewares/upload")

const router = express.Router();

//create stationary
router.post(
"/create-stationary/",
upload.single("image"),
validate(stationaryValidation.createStationary),
stationaryController.createStationary
);

router.get(
"/list-stationary/",
validate(stationaryValidation.listStationary),
stationaryController.listStationary
);

router.delete(
"/delete-stationary/:id",
stationaryController.deleteStationary
);

router.put(
"/update-stationary/:id",
upload.single("image"),
stationaryController.updateStationary
);


module.exports =router;