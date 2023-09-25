const { userService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const { userService } = require("../services");

/** list user */
const getUserList = async (req, res) => {
  try {
    const reqBody = req.body;

    const user = await userService.getUserList(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "User list successfully!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


/** deleete user */
const deleteUser = async (req, res) => {
  try {
    const id = req.params.userId;

    const user = await userService.getUserList();
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }
    const updateuser = await userService.deleteUser(id)
    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** update user */
const updateUser = async (req, res) => {
  try {
    const id = req.params.Id;

    const user = await userService.getUserById();
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }
    const updateuser = await userService.updateDetails(id,req.body)
    res.status(200).json({
      success: true,
      message: "User update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {createUser,getUserList,deleteUser,updateUser};