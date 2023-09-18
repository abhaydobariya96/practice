const Joi = require("joi")

// create user
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        phone_number: Joi.number().integer(),
        password: Joi.string().required().trim(),
    })
};

// create user
const listUser = {
    query: Joi.object().keys({
        first_name: Joi.string().allow("").trim(),
        last_name: Joi.string().allow("").trim(),
        email: Joi.string().allow("").trim(),
        phone_number: Joi.number().integer(),
        password: Joi.string().allow("").trim(),
    })
};


module.exports = {
    createUser,
    listUser
}