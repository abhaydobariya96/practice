const express = require("express")
const contactValidation = require("../../validations/contact.vallidation.js")
const { contactController } = require("../../controllers/index.js")
const validate = require("../../middlewares/validate.js");
const router = express.Router();


/**create contact */
router.post(
    "/create-contact",
    validate(contactValidation.createContact),
    contactController.createContact
)

/**list contact */
router.get(
    "/list-contact",
    validate(contactValidation.listContact),
    contactController.listContact
)
/**delete contact */
router.delete(
    "/delete-contact/:Id",
    contactController.deleteContact
)
/**update contact */
router.put(
    "/update-contact/:contactId",
    contactController.updateContact
)


module.exports = router