const express = require("express")
const newsValidation = require("../../validations/news.validation")
const { newsController } = require("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();


/**create news */
router.post(
    "/create-news",
    validate(newsValidation.createNews),
    newsController.createNews
)

/**list news */
router.get(
    "/list-news",
    validate(newsValidation.listNews),
    newsController.listNews
)
/**delete news */
router.delete(
    "/delete-news/:Id",
    newsController.deleteNews
)
/**update news */
router.put(
    "/update-news/:newsId",
    newsController.updateNews
)


module.exports = router;