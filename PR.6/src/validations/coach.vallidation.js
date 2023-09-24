const Joi = require("joi")

const createCoach = {
    body:Joi.object().keys({
        First_Name:Joi.string().required().trim(),
        FLast_Name:Joi.string().required().trim(),
        Date_of_Birth:Joi.string().required().trim(),
        Email:Joi.string().required().trim(),
        Address:Joi.string().required().trim(),
    })
}
const listCoach = {
    query:Joi.object().keys({
        First_Name:Joi.string().allow("").trim(),
        FLast_Name:Joi.string().allow("").trim(),
        Date_of_Birth:Joi.string().allow("").trim(),
        Email:Joi.string().allow("").trim(),
        Address:Joi.string().allow("").trim(),
    })
}

module.exports={
    createCoach,
    listCoach
}