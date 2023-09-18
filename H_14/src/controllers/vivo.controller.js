const { vivoService } = require("../services")


// create vivo
const createVivo = async (req, res) => {
    try {
        const reqBody = req.body;
        const vivo = await vivoService.createVivo(reqBody);

        if (!vivo) {
            throw new Error("vivo not found!");
        }
        res.status(200).json({
            success: true,
            message: ("vivo create successfully!"),
            data: { vivo }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// create vivo
const listVivo = async (req, res) => {
    try {
        const reqBody = req.body;
        const vivo = await vivoService.listVivo(reqBody);

        if (!vivo) {
            throw new Error("vivo not found!");
        }
        res.status(200).json({
            success: true,
            message: ("vivo list successfully!"),
            data: { vivo }
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// delete vivo
const deleteVivo = async (req, res) => {
    try {
        const id = req.params.Id;
        const vivo = await vivoService.listVivo(id);

        if (!vivo) {
            throw new Error("vivo not found!");
        }

        await vivoService.deleteVivo(id)
        res.status(200).json({
            success: true,
            message: ("vivo delete successfully!")
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// update vivo
const updateVivo = async (req, res) => {
    try {
        const id = req.params.electronicId;
        const vivo = await electronicService.getElectronicById(id);

        if (!vivo) {
            throw new Error("vivo not found!");
        }

        await electronicService.updateDetail(id,updateBody)
        res.status(200).json({
            success: true,
            message: ("vivo details update successfully!")
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


module.exports = {
    createVivo,
    listVivo,
    deleteVivo,
    updateVivo
}