const { coachService } = require("../services")
const fs = require("fs")


const createCoach = async (req, res) => {
    try {
        const reqBody = req.body;

        const coach = await coachService.createCoach(reqBody);
        if (!coach) {
            throw new Error("coach not found!");
        }
        res.status(200).json({
            success: true,
            message: ("coach create successfully!"),
            data: { coach }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
const listCoach = async (req, res) => {
    try {
        const reqBody = req.body;
        const coach = await coachService.listCoach(reqBody);
        if (!coach) {
            throw new Error("coach not found!");
        }
        res.status(200).json({
            success: true,
            message: ("coach list successfully"),
            data: { coach }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteCoach = async (req, res) => {
    try {
        const id = req.params.Id;
        const coach = await coachService.listCoach();
        if (!coach) {
            throw new Error("coach not found!");
        }
        await coachService.deleteCoach(id)
        res.status(200).json({
            success: true,
            message: ("coach delete successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateCoach = async (req, res) => {
    try {
        const reqBody = req.body;
        const id = req.params.coachId;
        const coachEx = await coachService.getCoachById(id);
        if (!coachEx) {
            throw new Error("coach not found!");
        }
        if (req.file) {
            reqBody.image = req.file.filename;
        }
        const coach = await coachService.updateDetails(id, req.body)
        if (coach) {
            const filePath = `./public/image/${coach.image}`
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
        } else {
            throw new Error("Somthing want to wrong, please try again or leter!")
        }
        res.status(200).json({
            success: true,
            message: ("coach update successfully"),
            data: coach,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createCoach,
    listCoach,
    deleteCoach,
    updateCoach
}