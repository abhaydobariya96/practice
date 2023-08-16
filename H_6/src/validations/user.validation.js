const Joi = require("joi")

// create uset
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password : Joi.string().required()
    }),
};
module.exports = {createUser}