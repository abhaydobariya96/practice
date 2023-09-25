const express = require("express")
const userValidation = require("../../validation/user.validation");
const userController = require("../../controller/user.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();


//create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser,
);
//  list
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);

// update-details, user_id
router.put(
    "/update-details/:userId",
    userController.updateDetails
);

// Delete, user_id
router.delete(
    "/delete-user/:Id",
    userController.deleteUser
);

module.exports = router;