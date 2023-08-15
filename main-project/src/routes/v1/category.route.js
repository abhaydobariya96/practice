const express = require("express")
const router = express.Router();


// create category
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

// Get category list
router.get(
  "/list",
  validate(userValidation.getUserList),
  userController.getUserList
);

// Get category details by id
router.get(
  "/get-details/:userId",
  validate(userValidation.getDetails),
  userController.getUserDetails
);

// category details update by id
router.put(
  "/update-details/:userId",
  validate(userValidation.updateDetails),
  userController.updateDetails
);

// Delete category
router.delete(
  "/delete-user/:userId",
  validate(userValiation.getDetails),
  userController.deleteUser
);


module.exports = router;
