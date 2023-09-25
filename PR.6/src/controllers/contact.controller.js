const { contactService } = require("../services")

const createContact = async (req, res) => {
    try {
        const reqBody = req.body;
        const contact = await contactService.createContact(reqBody);
        if (!contact) {
            throw new Error("contact not found!");
        }
        res.status(200).json(   {
            success: true,
            message: ("contact create successfully"),
            data: { contact }
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
        const contact = await contactService.listContact();
        if (!contact) {
            throw new Error("contact not found!");
        }
        res.status(200).json({
            success: true,
            message: ("contact list successfully"),
            data: { contact }
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
        const contact = await contactService.listContact(id);
        if (!contact) {
            throw new Error("contact not found!");
        }
        await contactService.deleteContact(id)
        res.status(200).json({
            success: true,
            message: ("contact delete successfully"),
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
        const id = req.params.contactId;
        const contact = await contactService.getContactById(id);
        console.log(id);
        if (!contact) {
            throw new Error("contact not found!");
        }
        await contactService.updateDetails(id,req.body)
        res.status(200).json({
            success: true,
            message: ("contact update successfully"),
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