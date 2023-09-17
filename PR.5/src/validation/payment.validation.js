const Joi = require("joi")

const createPayment ={
    body:Joi.object().keys({
        Payment_Amount:Joi.string().required().trim(),
        Payment_Method:Joi.string().required().trim(),
        Payment_Date:Joi.string().required().trim(),
        Payer_Name:Joi.string().required().trim(),
        Payer_Contact:Joi.string().required().trim(),
    })
}


const listPayment ={
    query:Joi.object().keys({
        Payment_Amount:Joi.string().allow("").trim(),
        Payment_Method:Joi.string().allow("").trim(),
        Payment_Date:Joi.string().allow("").trim(),
        Payer_Name:Joi.string().allow("").trim(),
        Payer_Contact:Joi.string().allow("").trim(),
    })
}


module.exports={
    createPayment,
    listPayment
}