const Joi = require("joi")

const createContact = {
    body:Joi.object().keys({
        Name:Joi.string().required().trim(),
        Email_Address:Joi.string().required().trim(),
        Phone_Number:Joi.number().integer(),
        Subject:Joi.string().required().trim(),
        Message:Joi.string().required().trim(),
        Status:Joi.string().required().trim(),
    })
}
const listContact = {
    query:Joi.object().keys({
        Name:Joi.string().allow("").trim(),
        Email_Address:Joi.string().allow("").trim(),
        Phone_Number:Joi.number().integer(""),
        Subject:Joi.string().allow("").trim(),
        Message:Joi.string().allow("").trim(),
        Status:Joi.string().allow("").trim(),
    })
}

module.exports={
    createContact,
    listContact
}