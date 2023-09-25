const { tournamentService } = require("../services")

const createTournament = async (req, res) => {
    try {
        const reqBody = req.body;
        const tournament = await tournamentService.createTournament(reqBody);
        if (!tournament) {
            throw new Error("tournament not found!");
        }
        res.status(200).json({
            success: true,
            message: ("tournament create successfully"),
            data: { tournament }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
const listTournament = async (req, res) => {
    try {
        const reqBody = req.body;
        const tournament = await tournamentService.listTournament(reqBody);
        if (!tournament) {
            throw new Error("tournament not found!");
        }
        res.status(200).json({
            success: true,
            message: ("tournament list successfully"),
            data: { tournament }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteTournament = async (req, res) => {
    try {
        const id = req.params.Id;
        const tournament = await tournamentService.listTournament();
        if (!tournament) {
            throw new Error("tournament not found!");
        }
        await tournamentService.deleteTournament(id)
        res.status(200).json({
            success: true,
            message: ("tournament delete successfully"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateTournament = async (req, res) => {
    try {
        const id = req.params.tournamentId;
        const tournament = await tournamentService.getTournamentById(id);
        if (!tournament) {
            throw new Error("tournament not found!");
        }
        await tournamentService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("tournament update successfully"),
            data: { tournament }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createTournament,
    listTournament,
    deleteTournament,
    updateTournament
}