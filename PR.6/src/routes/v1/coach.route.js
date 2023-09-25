const express = require("express")
const { coachVallidation } = require("../../validations")
const { coachController } = require("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();


/**create coach */
router.post(
    "/create-coach",
    validate(coachVallidation.createCoach),
    coachController.createCoach
)

/**list coach */
router.get(
    "/list-coach",
    validate(coachVallidation.listCoach),
    coachController.listCoach
)
/**delete coach */
router.delete(
    "/delete-coach/:Id",
    coachController.deleteCoach
)
/**update coach */
router.put(
    "/update-coach/:coachId",
    coachController.updateCoach
)


module.exports = router;