const express = require("express")
const galleryValidation = require("../../validations/gallery.validation")
const { galleryController } = require("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();


/**create gallery */
router.post(
    "/create-gallery",
    validate(galleryValidation.createGallery),
    galleryController.createGallery
)

/**list gallery */
router.get(
    "/list-gallery",
    validate(galleryValidation.listGallery),
    galleryController.listGallery
)
/**delete gallery */
router.delete(
    "/delete-gallery/:Id",
    galleryController.deleteGallery
)
/**update gallery */
router.put(
    "/update-gallery/:galleryId",
    galleryController.updateGallery
)


module.exports = router;