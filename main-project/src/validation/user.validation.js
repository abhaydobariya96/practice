const Joi = require("joi")

// create uset
const createUser= {
body:Joi.object().keys({
    first_name:Joi.string().required().trim(),
    last_name:Joi.string().requires().trim(),
    email:Joi.string().require().trim(),
    password:Joi.string().required().trim(),
}),
};