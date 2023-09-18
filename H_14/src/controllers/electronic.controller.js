const { electronicService } = require("../services")


// create electronic
const createElectronic = async (req, res) => {
    try {
        const reqBody = req.body;
        const electronic = await electronicService.createElectronic(reqBody);

        if (!electronic) {
            throw new Error("electronic not found!");
        }
        res.status(200).json({
            success: true,
            message: ("electronic create successfully!"),
            data: { electronic }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// create electronic
const listElectronic = async (req, res) => {
    try {
        const reqBody = req.body;
        const electronic = await electronicService.listElectronic(reqBody);

        if (!electronic) {
            throw new Error("electronic not found!");
        }
        res.status(200).json({
            success: true,
            message: ("electronic list successfully!"),
            data: { electronic }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// delete electronic
const deleteElectronic = async (req, res) => {
    try {
        const id = req.params.Id;
        const electronic = await electronicService.listElectronic(id);

        if (!electronic) {
            throw new Error("electronic not found!");
        }

        await electronicService.deleteElectronic(id)
        res.status(200).json({
            success: true,
            message: ("electronic delete successfully!")
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// update electronic
const updateElectronic = async (req, res) => {
    try {
        const id = req.params.electronicId;
        const electronic = await electronicService.getElectronicById(id);

        if (!electronic) {
            throw new Error("electronic not found!");
        }

        await electronicService.updateDetail(id,updateBody)
        res.status(200).json({
            success: true,
            message: ("electronic details update successfully!")
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


module.exports = {
    createElectronic,
    listElectronic,
    deleteElectronic,
    updateElectronic
}