const Joi = require("joi")

const createCategory = {
    body: Joi.object().keys({
        image: Joi.string().allow(),
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim(),
        category_count: Joi.number().integer()
    })
}

const listCategory = {
    query: Joi.object().keys({
        category_name: Joi.string().allow("").trim(),
        category_desc: Joi.string().allow("").trim(),
        category_count: Joi.number().integer()
    })
}


module.exports = { createCategory,listCategory }