const express = require("express")
const categoryValidation = require("../../validations/category.validation")
const { categoryController } = require("../../controllers")
const validate = require("../../middlewares/validate")
const { upload } = require("../../middlewares/upload")

const router = express.Router();


/**create category */
router.post(
    "/create-category",
    upload.single("image"),
    validate(categoryValidation.createCategory),
    categoryController.createCategory
)
/**list category */
router.get(
    "/list-category",
    validate(categoryValidation.listCategory),
    categoryController.listCategory
)
/**delete category */
router.delete(
    "/delete-category/:Id",
    categoryController.deleteCategory
)
/**update category */
router.put(
    "/update-category/:categoryId",
    upload.single("image"),
    categoryController.updateCategory
)


module.exports = router;