const Joi = require("joi")

const createCoach = {
    body: Joi.object().keys({
        FirstName: Joi.string().required().trim(),
        LastName: Joi.string().required().trim(),
        DateofBirth: Joi.string().required().trim(),
        Email: Joi.string().required().trim(),
        Address: Joi.string().required().trim(),
    })
}
const listCoach = {
    query: Joi.object().keys({
        FirstName: Joi.string().allow("").trim(),
        LastName: Joi.string().allow("").trim(),
        DateofBirth: Joi.string().allow("").trim(),
        Email: Joi.string().allow("").trim(),
        Address: Joi.string().allow("").trim()
    })
}

module.exports = {
    createCoach,
    listCoach
}