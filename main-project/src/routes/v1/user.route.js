const express = require("express");
const router = express.Router();


//create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

//  Get user list
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);

// user details update by id
router.put(
    "/update-details/:userId",
    validate(userValidation.updateDetails),
    userController.updateDetails
  );

  //  Delete user
  router.delete(
    "/delete-user/:userId",
    validate(userValidation.getDetails),
    userController.deleteUser
  );

// router.get("/list",(req,res)=>{
//   res.send(data)
// })
// let data = {
//   "id" : 1584,
//   "first_name": "dobariya",
//   "last_name": "Abhay",
// }
// module.exports = router;