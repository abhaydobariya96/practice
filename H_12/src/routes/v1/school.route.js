const express = require("express")
const schoolValidation = require ("../../validations/school.validation")
const schoolController = require ("../../controllers/school.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create school
router.post(
"/create-school/",
validate(schoolValidation.createSchool),
schoolController.createSchool
);

//list school
router.get(
"/list-school/",
validate(schoolValidation.listSchool),
schoolController.listSchool
);

//delet school
router.delete(
"/delete-school/:Id",
schoolController.deleteSchool
);

//update school
router.put(
"/update-school/:Id",
schoolController.updateSchool
);

module.exports =router;