const { playerService } = require("../services")

const createPlayer = async (req, res) => {
    try {
        const reqBody = req.body;
        const player = await playerService.createPlayer(reqBody);
        if (!player) {
            throw new Error("player not found!");
        }
        res.status(200).json({
            success: true,
            message: ("player create successfully"),
            data: { player }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
const listPlayer = async (req, res) => {
    try {
        const reqBody = req.body;
        const player = await playerService.listPlayer(reqBody);
        if (!player) {
            throw new Error("player not found!");
        }
        res.status(200).json({
            success: true,
            message: ("player list successfully"),
            data: { player }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deletePlayer = async (req, res) => {
    try {
        const id = req.params.Id;
        const player = await playerService.listPlayer();
        if (!player) {
            throw new Error("player not found!");
        }
        await playerService.deletePlayer(id)
        res.status(200).json({
            success: true,
            message: ("player delete successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updatePlayer = async (req, res) => {
    try {
        const id = req.params.playerId;
        const player = await playerService.getPlayerById(id);
        if (!player) {
            throw new Error("player not found!");
        }
        await playerService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("player update successfully"),
            data: { player  }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createPlayer,
    listPlayer,
    deletePlayer,
    updatePlayer
}