const express = require("express")
const resultValidation = require("../../validations/result.validation.js")
const { resultController } = require("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();


/**create result */
router.post(
    "/create-result",
    validate(resultValidation.createResult),
    resultController.createResult
)

/**list result */
router.get(
    "/list-result",
    validate(resultValidation.listResult),
    resultController.listResult
)
/**delete result */
router.delete(
    "/delete-result/:Id",
    resultController.deleteResult
)
/**update result */
router.put(
    "/update-result/:resultId",
    resultController.updateResult
)


module.exports = router;