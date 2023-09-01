const express = require("express")
const studentValidation = require ("../../validations/student.validation")
const studentController = require ("../../controllers/student.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create student
router.post(
"/create-student/",
validate(studentValidation.createStudent),
studentController.createStudent
);

//list student
router.get(
"/list-student/",
validate(studentValidation.listStudent),
studentController.listStudent
);

//delete student
router.delete(
"/delete-student/:Id",
studentController.deleteStudent
);

//update student
router.put(
"/update-student/:Id",
studentController.updateStudent
);



module.exports =router;