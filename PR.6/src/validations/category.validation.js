const Joi = require("joi")

const createCategory = {
    body: Joi.object().keys({
        image: Joi.string().allow(""),
        category_Name: Joi.string().required().trim(),
        Description: Joi.string().required().trim(),
        Creatio_Date: Joi.string().required().trim(),
    })
}
const listCategory = {
    query: Joi.object().keys({
        image: Joi.string().allow(""),
        category_Name: Joi.string().allow("").trim(),
        Description: Joi.string().allow("").trim(),
        Creatio_Date: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createCategory,
    listCategory
}