const { coachService } = require("../services")

const createCoach = async (req, res) => {
    try {
        const reqBody = req.body;
        const coach = await coachService.createCoach(reqBody);
        if (!coach) {
            throw new Error("coach not found!");
        }
        res.status(200).json(   {
            success: true,
            message: ("coach create successfully"),
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
        const id = req.params.coachId;
        const coach = await coachService.getCoachById(id);
        if (!coach) {
            throw new Error("coach not found!");
        }
        await coachService.updateDetails(id,req.body)
        res.status(200).json({
            success: true,
            message: ("coach update successfully"),
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