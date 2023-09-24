const Joi = require("joi")

const createNews = {
    body:Joi.object().keys({
        Title:Joi.string().required().trim(),
        Author:Joi.string().required().trim(),
        Category:Joi.string().required().trim(),
        Content:Joi.string().required().trim(),
        Tags:Joi.string().required().trim(),
        Comments:Joi.string().required().trim(),
    })
}
const listNews = {
    query:Joi.object().keys({
        Title:Joi.string().allow("").trim(),
        Author:Joi.string().allow("").trim(),
        Category:Joi.string().allow("").trim(),
        Content:Joi.string().allow("").trim(),
        Tags:Joi.string().allow("").trim(),
        Comments:Joi.string().allow("").trim(),
    })
}

module.exports={
    createNews,
    listNews
}