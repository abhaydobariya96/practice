const Joi = require("joi")

const createPlayer = {
    body: Joi.object().keys({
        First_Name: Joi.string().required().trim(),
        Last_Name: Joi.string().required().trim(),
        Date_of_Birth: Joi.string().required().trim(),
        Nationality: Joi.string().required().trim(),
        Height: Joi.string().required().trim(),
        Weight: Joi.string().required().trim(),
        Team: Joi.string().required().trim(),
        Position: Joi.string().required().trim(),
    })
}
const listPlayer = {
    query: Joi.object().keys({
        First_Name: Joi.string().allow("").trim(),
        Last_Name: Joi.string().allow("").trim(),
        Date_of_Birth: Joi.string().allow("").trim(),
        Nationality: Joi.string().allow("").trim(),
        Height: Joi.string().allow("").trim(),
        Weight: Joi.string().allow("").trim(),
        Team: Joi.string().allow("").trim(),
        Position: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createPlayer,
    listPlayer
}