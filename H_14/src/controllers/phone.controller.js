const { phoneService } = require("../services")


// create phone
const createPhone = async (req, res) => {
    try {
        const reqBody = req.body;
        const phone = await phoneService.createPhone(reqBody);

        if (!phone) {
            throw new Error("phone not found!");
        }
        res.status(200).json({
            success: true,
            message: ("phone create successfully!"),
            data: { phone }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// create phone
const listPhone = async (req, res) => {
    try {
        const reqBody = req.body;
        const phone = await phoneService.listPhone(reqBody);

        if (!phone) {
            throw new Error("phone not found!");
        }
        res.status(200).json({
            success: true,
            message: ("phone list successfully!"),
            data: { phone }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// delete phone
const deletePhone = async (req, res) => {
    try {
        const id = req.params.Id;
        const phone = await phoneService.listPhone(id);

        if (!phone) {
            throw new Error("phone not found!");
        }

        await phoneService.deletePhone(id)
        res.status(200).json({
            success: true,
            message: ("phone delete successfully!")
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// update phone
const updatePhone = async (req, res) => {
    try {
        const id = req.params.electronicId;
        const phone = await electronicService.getElectronicById(id);

        if (!phone) {
            throw new Error("phone not found!");
        }

        await electronicService.updateDetail(id,updateBody)
        res.status(200).json({
            success: true,
            message: ("phone details update successfully!")
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


module.exports = {
    createPhone,
    listPhone,
    deletePhone,
    updatePhone
}