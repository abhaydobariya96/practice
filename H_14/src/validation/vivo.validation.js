const Joi = require("joi")

// create vivo
const createVivo = {
    body: Joi.object().keys({
        model: Joi.string().required().trim(),
        price:Joi.number().integer(),
        processor: Joi.string().required().trim(),
        memory: Joi.string().required().trim(),
        colour: Joi.number().integer(),
        storage: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
    })
};

// create vivo
const listVivo = {
    query: Joi.object().keys({
        model: Joi.string().allow("").trim(),
        price:Joi.number().integer(),
        processor: Joi.string().allow("").trim(),
        memory: Joi.string().allow("").trim(),
        colour: Joi.number().integer(),
        storage: Joi.string().allow("").trim(),
        description: Joi.string().allow("").trim(),
    })
};


module.exports = {
    createVivo,
    listVivo
}