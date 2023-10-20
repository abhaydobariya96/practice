const Joi = require("joi")

const createCategory = {
    body: Joi.object().keys({
        image: Joi.string().allow(),
        category_name: Joi.string().required().trim(),
        category_desc: Joi.string().required().trim(),
        category_count: Joi.number().integer(),
        email: Joi.string().required().trim(),
    })
}

const listCategory = {
    query: Joi.object().keys({
        category_name: Joi.string().allow("").trim(),
        category_desc: Joi.string().allow("").trim(),
        category_count: Joi.number().integer(),
        email: Joi.string().allow("").trim(),
    })
}

const sendMail = {
    body:Joi.object().keys({
        email:Joi.string().required().email(),
        subject:Joi.string().required().trim(),
        text:Joi.string().required().trim()
    })
}


module.exports = { createCategory,listCategory,sendMail }