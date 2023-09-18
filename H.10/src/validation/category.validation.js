const Joi = require("joi")
//create category
const createCategory = {
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim(),
        category_count: Joi.string().required().trim(),
    })
}

//list category
const listCategory = {
    qyery: Joi.object().keys({
        category_name: Joi.string().allow("").trim(),
        category_desc: Joi.string().allow("").trim(),
        category_count: Joi.string().allow("").trim(),
    })
}


module.exports = {
    createCategory,
    listCategory
}