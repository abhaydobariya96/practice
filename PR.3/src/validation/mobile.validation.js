const Joi = require("joi");

//create mobile
const createMobile = {
    body: Joi.object().keys({
        mobile_name: Joi.string().required().trim(),
        model_name: Joi.string().required().trim(),
        desc: Joi.string().required().trim(),
        price: Joi.number().integer(),
    })
}


//list mobile
const listMobile = {
    query:Joi.object().keys({
        mobile_name:Joi.string().allow("").trim(),
        model_name:Joi.string().allow("").trim(),
        desc:Joi.string().allow("").trim(),
        price:Joi.number().integer(),
    })
}
module.exports = { createMobile,listMobile}