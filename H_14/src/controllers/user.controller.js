const { userService } = require("../services")

// create user
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("uset not found!");
        }

        res.status(200).json({
            success: true,
            message: ("user create successfully"),
            data: { user }
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

// list user
const listUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userService.listUser(reqBody);
        if (!user) {
            throw new Error("uset not found!");
        }

        res.status(200).json({
            success: true,
            message: ("user list successfully"),
            data: { user }
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

// delete user
const deleteUser = async (req, res) => {
    try {
        const id = req.params.Id;
        const user = await userService.listUser(id);
        if (!user) {
            throw new Error("uset not found!");
        }
        await userService.deleteUser(id);

        res.status(200).json({
            success: true,
            message: ("user delete successfully")
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

// update user
const updateUser = async (req, res) => {
    try {
        const id = req.params.userId;
        const user = await userService.getUserById(id);
        if (!user) {
            throw new Error("uset not found!");
        }
        await userService.updateDetails(id);

        res.status(200).json({
            success: true,
            message: ("user details update successfully")
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}


module.exports = {
    createUser,
    listUser,
    deleteUser,
    updateUser
}