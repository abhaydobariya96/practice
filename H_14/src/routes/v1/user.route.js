const express = require("express")
const userValidation = require("../../validation/user.validation")
const userController = require("../../controllers/user.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

//list user
router.get(
    "/list-user",
    validate(userValidation.listUser),
    userController.listUser
);

//delete user
router.delete(
    "/delete-user/:Id",
    userController.deleteUser
);

//update user
router.put(
    "/update-user/:userId",
    userController.updateUser
);


module.exports = router


