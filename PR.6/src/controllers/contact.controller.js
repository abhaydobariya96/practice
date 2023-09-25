const { conatactService } = require("../services")

const createContact = async (req, res) => {
    try {
        const reqBody = req.body;
        const conatact = await conatactService.createContact(reqBody);
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
const listContact = async (req, res) => {
    try {
        const reqBody = req.body;
        const conatact = await conatactService.listContact(reqBody);
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

const deleteContact = async (req, res) => {
    try {
        const id = req.params.Id;
        const conatact = await conatactService.listContact();
        if (!conatact) {
            throw new Error("conatact not found!");
        }
        await conatactService.deleteContact(id)
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

const updateContact = async (req, res) => {
    try {
        const id = req.params.contacId;
        const conatact = await conatactService.getContactById(id);
        if (!conatact) {
            throw new Error("conatact not found!");
        }
        await conatactService.updateDetails(id,req.body)
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
    createContact,
    listContact,
    deleteContact,
    updateContact
}