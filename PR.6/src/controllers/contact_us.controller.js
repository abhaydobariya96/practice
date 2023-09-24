const { conatact_usService } = require("../services")

const createConatact = async (req, res) => {
    try {
        const reqBody = req.body;
        const conatact = await conatact_usService.createConatact(reqBody);
        if (!conatact) {
            throw new Error("conatact not found!");
        }
        res.status(200).json(   {
            success: true,
            message: ("conatact create successfully"),
            data: { conatact }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
const listConatact = async (req, res) => {
    try {
        const reqBody = req.body;
        const conatact = await conatact_usService.listConatact(reqBody);
        if (!conatact) {
            throw new Error("conatact not found!");
        }
        res.status(200).json({
            success: true,
            message: ("conatact list successfully"),
            data: { conatact }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteConatact = async (req, res) => {
    try {
        const id = req.params.Id;
        const conatact = await conatact_usService.listConatact();
        if (!conatact) {
            throw new Error("conatact not found!");
        }
        await conatact_usService.deleteConatact(id)
        res.status(200).json({
            success: true,
            message: ("conatact delete successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateConatact = async (req, res) => {
    try {
        const id = req.params.contacId;
        const conatact = await conatact_usService.getConatactById(id);
        if (!conatact) {
            throw new Error("conatact not found!");
        }
        await conatact_usService.updateDetails(id,req.body)
        res.status(200).json({
            success: true,
            message: ("conatact update successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createConatact,
    listConatact,
    deleteConatact,
    updateConatact
}