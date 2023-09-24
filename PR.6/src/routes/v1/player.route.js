const express = require("express")
const playerValidation = require("../../validations/player.validation.js")
const { playerController } = require("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();


/**create player */
router.post(
    "/create-player",
    validate(playerValidation.createPlayer),
    playerController.createPlayer
)

/**list player */
router.get(
    "/list-player",
    validate(playerValidation.listPlayer),
    playerController.listPlayer
)
/**delete player */
router.delete(
    "/delete-player/:Id",
    playerController.deletePlayer
)
/**update player */
router.put(
    "/update-player/:playerId",
    playerController.updatePlayer
)


module.exports = router;