const { resultService } = require("../services")

const createResult = async (req, res) => {
    try {
        const reqBody = req.body;
        const result = await resultService.createResult(reqBody);
        if (!result) {
            throw new Error("result not found!");
        }
        res.status(200).json({
            success: true,
            message: ("result create successfully"),
            data: { result }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
const listResult = async (req, res) => {
    try {
        const reqBody = req.body;
        const result = await resultService.listResult(reqBody);
        if (!result) {
            throw new Error("result not found!");
        }
        res.status(200).json({
            success: true,
            message: ("result list successfully"),
            data: { result }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteResult = async (req, res) => {
    try {
        const id = req.params.Id;
        const result = await resultService.listResult();
        if (!result) {
            throw new Error("result not found!");
        }
        await resultService.deleteResult(id)
        res.status(200).json({
            success: true,
            message: ("result delete successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateResult = async (req, res) => {
    try {
        const id = req.params.resultId;
        const result = await resultService.getResultById(id);
        if (!result) {
            throw new Error("result not found!");
        }
        await resultService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("result update successfully"),
            data: { result }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createResult,
    listResult,
    deleteResult,
    updateResult
}