const express = require("express")
const tournamentValidation = require("../../validations/tournament.validation.js")
const { tournamentController } = require("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();


/**create tournament */
router.post(
    "/create-tournament",
    validate(tournamentValidation.createTournament),
    tournamentController.createTournament
)

/**list tournament */
router.get(
    "/list-tournament",
    validate(tournamentValidation.listTournament),
    tournamentController.listTournament
)
/**delete tournament */
router.delete(
    "/delete-tournament/:Id",
    tournamentController.deleteTournament
)
/**update tournament */
router.put(
    "/update-tournament/:tournamentId",
    tournamentController.updateTournament
)


module.exports = router;