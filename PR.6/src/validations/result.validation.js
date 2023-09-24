const Joi = require("joi")

const createResult = {
    body: Joi.object().keys({
        Event_Name: Joi.string().required().trim(),
        Event_Date: Joi.string().required().trim(),
        Event_Location: Joi.string().required().trim(),
        Winner: Joi.string().required().trim(),
        Final_Score: Joi.string().required().trim(),
        Medalists: Joi.string().required().trim(),
        Records: Joi.string().required().trim(),
    })
}
const listResult = {
    query: Joi.object().keys({
        Event_Name: Joi.string().allow("").trim(),
        Event_Date: Joi.string().allow("").trim(),
        Event_Location: Joi.string().allow("").trim(),
        Winner: Joi.string().allow("").trim(),
        Final_Score: Joi.string().allow("").trim(),
        Medalists: Joi.string().allow("").trim(),
        Records: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createResult,
    listResult
}